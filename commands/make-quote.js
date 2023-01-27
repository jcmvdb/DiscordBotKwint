const {SlashCommandBuilder} = require('discord.js');
const databaseFunction = require("../databaseFunctions");

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
    async execute(client, interaction, jquery, databaseFunctions) {
        // const noOption = 'Er is geen reden gegeven';
        // let test = interaction.options.getString('input');
        let title = interaction.options.getString("title");
        let text = interaction.options.getString("text");


        const dataToSend = {
            title: title,
            text: text,
        }

        databaseFunctions.sendData("jcmvdb.com", "/discord/public/test", interaction, dataToSend);

        await interaction.reply(`Title:\n**${title}**\n\nText\n**${text}**`);

    },
};