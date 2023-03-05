const { SlashCommandBuilder } = require("discord.js");
const { getApiData } = require("../utils/databaseFunctions.util")

module.exports = {
    category: "test",
    data: new SlashCommandBuilder()
        .setName("get-random-quote")
        .setDescription("get a random quote"),
    async execute(client, interaction) {
        const data = getApiData("quote/getData");
        console.log(data);
        await interaction.reply(" test ");
    }
}