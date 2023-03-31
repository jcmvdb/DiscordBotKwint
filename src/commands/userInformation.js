const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { createUserInformationEmbed } = require('../utils/embedCreator.util');
const { roleMapToArray } = require('../utils/roleMapToArray.util');

module.exports = {
	category: 'test',
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('This give user information')
		.addUserOption((option) => option.setName('user').setDescription('select a user')),
	async execute(client, interaction) {
		const user = interaction.options.getUser('user') ?? interaction.member.user;
		const createdDate = new Date(user.createdTimestamp);
		const joinedDate = new Date((await interaction.guild.members.fetch(user)).joinedTimestamp);
		const roles = roleMapToArray((await interaction.guild.members.fetch(user)).roles.cache)
			.slice(0, -1)
			.map((role) => `<@&${role.id}>`)
			.join(' ');

		embedDTO = {
			user,
			createdDate,
			joinedDate,
			roles,
			interaction,
			thumbnail: user.displayAvatarURL(),
		};

		await interaction.reply({ embeds: [createUserInformationEmbed(embedDTO)] });
	},
};
