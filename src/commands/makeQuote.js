const { SlashCommandBuilder } = require('discord.js');
const { postApi } = require('../utils/remoteDB.util');

module.exports = {
	category: 'test',
	data: new SlashCommandBuilder()
		.setName('make-quote')
		.setDescription('Send data to the server using the API')
		.addStringOption((option) =>
			option
				.setName('title')
				.setDescription('The input to echo back')
				.setRequired(true)
		)
		.addStringOption((option) =>
			option
				.setName('text')
				.setDescription('description')
				.setRequired(true)
		),
	async execute(client, interaction) {
		const title = interaction.options.getString('title');
		const text = interaction.options.getString('text');

		postApi('quote/postData', {
			title,
			text,
		});

		await interaction.reply(`Title:\n**${title}**\n\nText\n**${text}**`);
	},
};
