const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("array")
        .setDescription("get pong back"),
    async execute(client, interaction, jquery) {
        const lijst = ['1', '2', '3', '4', 'test'];
        let lijststring = "";


        for (let i = 0; i < lijst.length; i++) {
            lijststring += lijst[i];
            lijststring += "\n"
        }
        await interaction.reply(lijststring);
    },
};