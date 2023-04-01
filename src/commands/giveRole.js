const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js');
//EMBED NEEDS TO BE IMPROVED AND MIGRATED TO EMBEDCREATOR
module.exports = {
	category: 'test',
	data: new SlashCommandBuilder()
		.setName('give-role')
		.setDescription('Give role to some user')
		.addUserOption((option) =>
			option
				.setName('username')
				.setDescription('Enter discord user to give role to')
				.setRequired(true)
		)
		.addRoleOption((option) =>
			option.setName('role').setDescription('Role name to give to user').setRequired(true)
		)
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles)
		.toJSON(),

	async execute(client, interaction) {
		const member = interaction.options.getMember('username');
		const role = interaction.options.getRole('role');
		member.roles.add(role);

		const botEmbed = new EmbedBuilder()
			.setTitle('Role-Given')
			.setDescription('Description')
			.setColor('#f1d02a')
			.addFields(
				{ name: 'Role', value: role.name },
				{ name: 'User', value: `${member.user.username}` }
			)
			.setTimestamp()
			.setFooter({ text: 'Footer' })
			.setAuthor({ name: interaction.member.user.username })
			.toJSON();

		await interaction.reply({ embeds: [botEmbed] });
	},
};
