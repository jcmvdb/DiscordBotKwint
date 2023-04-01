const { SlashCommandBuilder } = require('discord.js');
//NEEDS FUNCTIONALITY AND AN EMBED
module.exports = {
	category: 'test',
	data: new SlashCommandBuilder()
		.setName('remember-birthday')
		.setDescription(
			'tell us your birthday and we will send a message wishing you a happy birthday'
		)
		.toJSON(),
	async execute(client, interaction) {
		await interaction.message('Test');
	},
};
