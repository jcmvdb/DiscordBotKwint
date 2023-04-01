const { SlashCommandBuilder } = require('discord.js');
const { createCatEmbed } = require('../utils/embedCreator.util');
//EMBED NEEDS TO BE IMPROVED
module.exports = {
	category: 'misc',
	data: new SlashCommandBuilder()
		.setName('cat')
		.setDescription('get a free cat pictrue')
		.toJSON(),
	async execute(client, interaction) {
		const URL = 'https://api.thecatapi.com/v1/';
		const headers = {
			'x-api-key': `${process.env.CATKEY}`,
			'Content-Type': 'application/json',
		};

		fetch(URL.concat('images/search?format=json'), {
			method: 'GET',
			headers,
		})
			.then((response) => response.json())
			.then((json) => {
				interaction.reply({
					embeds: [createCatEmbed({ image: json[0].url, client, interaction }, 'f1d02a')],
				});
			});
	},
};
