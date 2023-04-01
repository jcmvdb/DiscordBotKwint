const { Client, Events } = require('discord.js');
const { postApi } = require('../utils/remoteDB.util');
const { errorHandler } = require('../utils/errorHandling.util');
const { prisma } = require('./prisma.service');
const commands = require('../commands');

const client = new Client({
	intents: ['Guilds'],
});

client.once(Events.ClientReady, (client) => {
	console.log(`Ready, logged in as ${client.user.tag}`);
	client.commands = commands;
});

client.on(Events.InteractionCreate, async (interaction) => {
	if (interaction.isChatInputCommand()) {
		commands
			.find((command) => command.data.name === interaction.commandName)
			?.execute(client, interaction)
			.then(() => {
				console.log(
					`user: ${interaction.user.username}, has used command: ${interaction.commandName}`
				);
				insertCommandEntry(interaction);
			})
			.catch((err) => {
				errorHandler(err);
				interaction.reply({
					content: 'There was an error while executing this command',
					ephemeral: true,
				});
			});
	}

	if (interaction.isAutocomplete()) {
		commands
			.find((command) => command.data.name && command.autocomplete)
			?.autocomplete(client, interaction);
	}
});

async function insertCommandEntry(interaction) {
	await prisma.command.create({
		data: {
			commandName: interaction.commandName,
			userId: interaction.user.id,
		},
	});

	postApi('command/postData', {
		command: interaction.commandName,
		userId: interaction.user.id,
	});
}

module.exports = {
	client,
};
