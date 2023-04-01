const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	category: 'misc',
	data: new SlashCommandBuilder()
		.setName('show-command')
		.setDescription('Show more info about a specific command')
		.addStringOption((option) =>
			option
				.setName('role')
				.setDescription('Role you want more information on')
				.setRequired(true)
				.setAutocomplete(true)
		)
		.toJSON(),

	async execute(client, interaction) {
		const role = interaction.options.getString('role');
		const commandNames = client.commands.map((command) => command.data.name);

		if (!commandNames.includes(role)) {
			return interaction.reply({
				content: 'Not an existing command, please retry with a different command',
				ephemeral: true,
			});
		}
		interaction.reply('fucuefuefs');
	},

	async autocomplete(client, interaction) {
		const focusedValue = interaction.options.getFocused();
		const validCommandNames = client.commands
			.map((command) => command.data.name)
			.filter((element) => element.includes(focusedValue))
			.map((element) => ({ name: element, value: element }));
		interaction.respond(validCommandNames);
	},
};
