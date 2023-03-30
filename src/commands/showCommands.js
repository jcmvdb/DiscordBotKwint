const { SlashCommandBuilder } = require('discord.js');
const { createCommandListEmbed } = require('../utils/embedCreator.util');
//NEEDS AN IMPROVED EMBED
module.exports = {
	category: 'test',
	data: new SlashCommandBuilder()
		.setName('show-commands')
		.setDescription('get the full list of all commands'),
	async execute(client, interaction) {
		const testCommands = [];
		const adminCommands = [];
		client.commands.forEach((command) => {
			switch (command.category) {
				case 'test':
					testCommands.push(command.data.name);
					break;
				case 'admin':
					adminCommands.push(command.data.name);
					break;
			}
		});
		const embedDTO = {
			testCommands,
			adminCommands,
			client,
			interaction,
		};

		await interaction.reply({
			embeds: [createCommandListEmbed(embedDTO)],
		});
	},
};
