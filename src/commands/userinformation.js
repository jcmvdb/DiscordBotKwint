const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	category: 'test',
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('This give user information')
		.addUserOption((option) => option.setName('user').setDescription('select a user')),
	async execute(client, interaction) {
		const userOption = interaction.options.getUser('user');
		const user = userOption ? userOption : interaction.member.user;
		const createdDate = new Date(user.createdTimestamp);
		const joinedDate = new Date((await interaction.guild.members.fetch(user)).joinedTimestamp);

		const months = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		];

		const userEmbed = new EmbedBuilder()
			.setTitle(`${user.username}#${user.discriminator}`)
			.setDescription(`<@${user.id}>`)
			.setColor('#3fac7b')
			.addFields(
				{
					name: 'Server',
					value: interaction.guild.name,
				},
				{
					name: 'Joined on',
					value: `${joinedDate.getDate()} \
						${months[joinedDate.getMonth()]} \
						${joinedDate.getFullYear()}`,
					inline: true,
				},
				{
					name: 'Created on',
					value: `${createdDate.getDate()} \
						${months[createdDate.getMonth()]} \
						${createdDate.getFullYear()}`,
					inline: true,
				}
			)
			.setThumbnail(`${user.displayAvatarURL()}`);
		await interaction.reply({ embeds: [userEmbed] });
	},
};
//};
