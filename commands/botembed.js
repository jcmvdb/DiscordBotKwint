const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("botmbed")
        .setDescription("This is a embed test"),
    async execute(client, interaction) {

        const botEmbed = new EmbedBuilder()
            .setTitle("Title")
            .setDescription("Description")
            .setColor("#f1d02a")
            .addFields(
                {name: "Bot name", value: client.user.username}
            )
            .setTimestamp()
            .setFooter({text: "Footer"})
            .setAuthor({name: interaction.member.user.username});

        await interaction.reply({embeds: [botEmbed]})
    },
};