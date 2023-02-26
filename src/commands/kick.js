const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const { errorHandler } = require('../utils/errorHandling.util');
const { createKickEmbed } = require('../utils/embedCreator.util');

module.exports = {
	category: 'admin',
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('you can kick a person')
		.addUserOption((option) =>
			option
				.setName('user')
				.setDescription('User that needs to be kicked')
				.setRequired(true)
		)
		.addStringOption((option) =>
			option.setName('reason').setDescription('give reason to kick')
		)
		.setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),

	async execute(client, interaction) {
		const member = interaction.options.getMember('user');
		const reason =
			interaction.options.getString('reason') ?? 'none provided';

		if (member.permissions.has([PermissionFlagsBits.Administrator])) {
			await interaction.reply({
				content:
					"You can't ban this user because they're an administrator",
				ephemeral: true,
			});
			return;
		}

		let sentDM = true;
		await member
			.send(
				`You've been kicked from ${interaction.guild.name} with the reason of : ${reason}`
			)
			.catch(async (err) => {
				if (err.code == '50007') {
					sentDM = false;
					return;
				}
				errorHandling.errorHandler(err);
			});

		const embedDTO = {
			kickedUser: member,
			interaction,
			client,
			sentDM,
		};

		await member
			.kick(reason)
			.then(async () => {
				await interaction.reply({
					embeds: [createKickEmbed(embedDTO)],
				});
			})
			.catch((err) => errorHandler(err));
	},
};
