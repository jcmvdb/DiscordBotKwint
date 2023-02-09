const { SlashCommandBuilder } = require('discord.js');
const { sendData } = require("../databaseFunctions");

module.exports = {
    category: "test",
    data: new SlashCommandBuilder()
        .setName("make-quote")
        .setDescription("Send data to the server using the API")
        .addStringOption(option =>
            option.setName('title')
                .setDescription('The input to echo back')
                .setRequired(true))
        .addStringOption(option =>
            option.setName("text")
                .setDescription("description")
                .setRequired(true)),
    async execute(client, interaction, secret) {
        // const noOption = 'Er is geen reden gegeven';
        // let test = interaction.options.getString('input');
        const title = interaction.options.getString("title");
        const text = interaction.options.getString("text");


        const dataToSend = {
            title,
            text
        }

        sendData("jcmvdb.com", "/discord/public/test", interaction, dataToSend);

        await interaction.reply(`Title:\n**${title}**\n\nText\n**${text}**`);

    },
};