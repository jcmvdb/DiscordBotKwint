const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("get pong back"),
        async execute(client, interaction, jquery, databaseFunctions) {
            const data = await databaseFunctions.getData("discord/public/post")
            const propertyValues = Object.values(data);
            const number = propertyValues.length;
            const random = Math.floor(Math.random() * number)
            await interaction.reply(`${propertyValues[random]["title"]} - ${propertyValues[random]["text"]}`);
        },
};