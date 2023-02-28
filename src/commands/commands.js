const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	category: 'test',
	data: new SlashCommandBuilder()
		.setName('commands')
		.setDescription('get the full list of all commands'),
	async execute(client, interaction) {
		let array = [];
		array = client.commands.map(commands => `command: ${commands.data.name}, description: ${commands.data.description} , category: ${commands.category}`);
		console.log(array);
		await interaction.reply(array.join("\n"));
	},
};
