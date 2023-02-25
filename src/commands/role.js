const {
	SlashCommandBuilder,
	ApplicationCommandOptionWithChoicesAndAutocompleteMixin,
} = require('discord.js');

module.exports = {
	category: 'test',
	data: new SlashCommandBuilder()
		.setName('role')
		.setDescription('Description'),
	async execute(client, interaction, secret) {
		// Here goes the code
		// const role = interaction.options.getRole('role');
		// const member = interaction.options.getMember('target');
		// member.roles.add(role);
		await interaction.reply('role');
		console.log(
			ApplicationCommandOptionWithChoicesAndAutocompleteMixin.name
		);
	},
};
