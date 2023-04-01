const { SlashCommandBuilder } = require('discord.js');
const { createCommandListEmbed } = require('../utils/embedCreator.util');

module.exports = {
	category: 'test',
	data: new SlashCommandBuilder()
		.setName('list-commands')
		.setDescription('get the full list of all commands')
		.toJSON(),
	async execute(client, interaction) {
		const testCommands = [];
		const adminCommands = [];
		const miscCommands = [];
		client.commands.forEach((command) => {
			switch (command.category) {
				case 'test':
					testCommands.push(command.data.name);
					break;
				case 'admin':
					adminCommands.push(command.data.name);
					break;
				case 'misc':
					miscCommands.push(command.data.name);
			}
		});
		const embedDTO = {
			testCommands,
			adminCommands,
			client,
			interaction,
			miscCommands,
		};

		await interaction.reply({
			embeds: [createCommandListEmbed(embedDTO)],
		});
	},
};
