const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'test',
    data: new SlashCommandBuilder()
        .setName('remember-birthday')
        .setDescription('tell us your birthday and we will send a message wishing you a happy birthday'),
    async execute(client, interaction) {
        await interaction.message("Test");
    },
};
