const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	category: 'test',
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('Description')
		.addStringOption((option) =>
			option.setName('input').setDescription('The input to echo back')
		),
	async execute(client, interaction) {
		const noOption = 'Er is geen reden gegeven';
		const test = interaction.options.getString('input') ?? noOption;
		await interaction.reply(
			`het werk eindelijk ${interaction.user.username} en dit is de input **${test}**`
		);
	},
};
