const { SlashCommandBuilder } = require('discord.js');
const { getApi } = require('../utils/remoteDB.util');
//NEEDS AN EMBED, and needs to properly work
module.exports = {
	category: 'test',
	data: new SlashCommandBuilder()
		.setName('get-random-quote')
		.setDescription('get a random quote'),
	async execute(client, interaction) {
		const data = await getApi('quote/getData');
		console.log(data);
		await interaction.reply(' test ');
	},
};
