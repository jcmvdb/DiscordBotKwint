const {SlashCommandBuilder, EmbedBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("user")
        .setDescription("This give user information")
        .addStringOption(option =>
            option.setName('user')
                .setDescription('get the information of specific member of the server')),
    async execute(client, interaction) {

        const userEmbed = new EmbedBuilder()
            .setTitle(interaction.user.username)
            .setDescription("beschrijving")
            .setColor('#443fac')
            .addFields(
                {name: "server", value: interaction.member.guild.name}
            );
        // await interaction.reply("het werk eindelijk");
        // let test = interaction.options.getString('user');
        // await interaction.reply(`User information`);
        // console.log(test)
        await interaction.reply({embeds: [userEmbed]})
    },
};