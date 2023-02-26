const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	category: 'test',
	data: new SlashCommandBuilder()
		.setName('time')
		.setDescription('see the current time'),
	async execute(client, interaction) {
		const time = new Date();
		console.log(time);

		const months = [
			'januari',
			'februari',
			'maart',
			'april',
			'mei',
			'juni',
			'juli',
			'augustus',
			'september',
			'oktober',
			'november',
			'december',
		];

		const botEmbed = new EmbedBuilder()
			.setTitle('time')
			.setDescription('beschrijving')
			.setColor('#f1d02a')
			.addFields(
				{
					name: 'time',
					value: `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`,
				},
				{
					name: 'date',
					value: `${time.getDate()}, ${months[time.getMonth()]}`,
				}
			)
			.setTimestamp()
			.setFooter({ text: 'Footer' })
			.setAuthor({ name: interaction.member.user.username });

		await interaction.reply({ embeds: [botEmbed] });
	},
};
