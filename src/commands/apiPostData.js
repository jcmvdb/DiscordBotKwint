const { SlashCommandBuilder } = require('discord.js');
const { postApi } = require('../utils/remoteDB.util');

module.exports = {
	category: 'test',
	data: new SlashCommandBuilder()
		.setName('api-post-data')
		.setDescription(
			'Posts data back from an api call to the server (discord.jcmvdb.com/api)'
		),
	async execute(client, interaction) {
		postApi('postData');
		await interaction.reply('bitch het werkt misschien');
	},
};
