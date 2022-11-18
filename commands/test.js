const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("test")
        .setDescription("Description")
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The input to echo back')),
    async execute(client, interaction) {
        // await interaction.reply("het werk eindelijk");
        const reason = 'Er is geen reden gegeven';
        let test = interaction.options.getString('input') && reason;
        await interaction.reply(`het werk eindelijk ${interaction.user.username} en dit is de input **${test}**`);
        // console.log(test)

    },
};