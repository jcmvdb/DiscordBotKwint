const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("get pong back"),
    async execute(client, interaction, jquery) {
            jquery.get('https://jcmvdb.com/discord/public/post', async function (data) {
                const array = JSON.parse(data);
                const propertyValues = Object.values(array);
                const number = propertyValues.length;
                const random = Math.floor(Math.random() * number)
                await interaction.reply(`${propertyValues[random]["title"]} - ${propertyValues[random]["text"]}`);
            });
    },
};