const { SlashCommandBuilder } = require('discord.js');
const { getApiData } = require('../utils/databaseFunctions.util');

module.exports = {
	category: 'test',
	data: new SlashCommandBuilder()
		.setName('api-get-data')
		.setDescription(
			'Gets data back from an api call to the server (discord.jcmvdb.com/api)'
		),
	async execute(client, interaction) {
		const data = await getApiData('command/getData');
		console.log(data);

		await interaction.reply('check console');
	},
};
