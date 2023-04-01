const { SlashCommandBuilder } = require('discord.js');
//NEEDS REWORK AND AN EMBED
module.exports = {
	category: 'test',
	data: new SlashCommandBuilder().setName('ping').setDescription('Gives back pong').toJSON(),
	async execute(client, interaction) {
		await interaction.reply('pong');
	},
};
