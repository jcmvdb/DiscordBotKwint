const {SlashCommandBuilder} = require('discord.js');



module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("get pong back"),
    async execute(client, interaction) {
        const wait = require('node:timers/promises').setTimeout;

        await interaction.reply("Pong!");
        await wait(2000);
        await interaction.editReply("Pong again!");
    },
};