const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("get pong back"),
    async execute(client, interaction, jquery) {
            jquery.get('https://discord.jcmvdb.com/array', async function (data) {
                const array = JSON.parse(data);
                const propertyValues = Object.values(array);
                const propertyKey = Object.keys(array);
                for (let i = 0; i < propertyValues.length; i++) {
                    console.log(propertyValues[i])
                }
                const number = propertyValues.length;
                const random = Math.floor(Math.random() * number)
                await interaction.reply(`${propertyValues[random]} - ${propertyKey[random]}`);
            });
    },
};