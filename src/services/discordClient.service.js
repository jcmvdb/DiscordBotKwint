const { Client, Events, GatewayIntentbits } = require('discord.js');
const { postApiData } = require('../utils/databaseFunctions.util');
const { errorHandler } = require('../utils/errorHandling.util');
const commands = require('../commands');

const client = new Client({
	intents: ['Guilds'],
});

client.once(Events.ClientReady, (c) => {
	console.log(`Ready, logged in as ${c.user.tag}`);
	client.commands = commands;
});

client.on(Events.InteractionCreate, async (interaction) => {
	if (interaction.isChatInputCommand) {
		commands
			.find((command) => command.data.name === interaction.commandName)
			?.execute(client, interaction)
			.then(() => {
				console.log(
					`user: ${interaction.user.username}, has used command: ${interaction.commandName}`
				);
				postApiData('command/postData', {
					command: interaction.commandName,
					userId: interaction.user.id,
				});
			})
			.catch((err) => {
				errorHandler(err);
				interaction.reply({
					content: 'There was an error while executing this command',
					ephemeral: true,
				});
			});
	}
});

module.exports = {
	client,
};
