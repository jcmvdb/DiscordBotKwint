const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'test',
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Gives back pong'),
    async execute(client, interaction) {
        await interaction.reply("pong");
    },
};
