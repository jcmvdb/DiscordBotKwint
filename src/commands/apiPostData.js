const { SlashCommandBuilder } = require('discord.js');
const { postApiData } = require('../utils/databaseFunctions.util');

module.exports = {
	category: 'test',
	data: new SlashCommandBuilder()
		.setName('api-post-data')
		.setDescription(
			'Posts data back from an api call to the server (discord.jcmvdb.com/api)'
		),
	async execute(client, interaction) {
		postApiData('postData');
		await interaction.reply('bitch het werkt misschien');
	},
};
