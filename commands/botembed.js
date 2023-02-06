const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const errorHandling = require("../errorHandling")

module.exports = {
    category: "test",
    data: new SlashCommandBuilder()
        .setName("botembed")
        .setDescription("This is a embed test"),
    async execute(client, interaction, secret) {
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

        await interaction.reply({embeds: [botEmbed]}).catch(
            err => errorHandling.errorHandler(err))
    },
};