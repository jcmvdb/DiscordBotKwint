const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	category: 'test',
	data: new SlashCommandBuilder()
		// .setCateogry("wat")
		.setName('commands')
		.setDescription('get the full list of all commands'),
	async execute(client, interaction, secret) {
		let command = client.commands;
		// console.log(command);
		const text = '**Commands**';
		let testCommands = '\n\n**TestCommands:**\n\n';
		let testCommandCount = 0;
		const adminCommands = '\n\n**Admin Commands:**\n\n';
		let adminCount = 0;
		const miscellaneousCommands = '\n\n**Miscellaneous:**\n\n';
		let miscellaneousCommandCount = 0;

		function categorize(item, index) {
			if (item.category === 'test') {
				testCommandCount++;
				testCommands += `/${index} - ${item.data.description}\n`;
			} else if (item.category === 'admin') {
				adminCount++;
				adminCommands += `/${index} - ${item.data.description}\n`;
			} else {
				miscellaneousCommandCount++;
				miscellaneousCommands += `/${index} - ${item.data.description}\n`;
			}
		}
		command.forEach(categorize);
		console.log(testCommandCount);
		if (testCommandCount > 0) {
			text += testCommands;
			console.log('testOfzo');
		}
		if (adminCount > 0) {
			text += adminCommands;
			console.log('AdminOfzo');
		}
		if (miscellaneousCommandCount > 0) {
			text += miscellaneousCommands;
			console.log('misc');
		}

		await interaction.reply(text);
	},
};
