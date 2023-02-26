const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	category: 'test',
	data: new SlashCommandBuilder()
		.setName('array')
		.setDescription('get pong back'),
	async execute(client, interaction) {
		const list = ['1', '2', '3', '4', 'test'];
		let listString = '';

		for (let i = 0; i < list.length; i++) {
			listString += list[i];
			listString += '\n';
		}
		await interaction.reply(listString);
	},
};
