const {SlashCommandBuilder, BanOptions} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("role")
        .setDescription("Description")
        .addUserOption(option =>
            option.setName("target")
                .setDescription("which user")
                .setRequired(true))
        .addRoleOption(option =>
            option.setName("role")
                .setDescription("role to give")
                .setRequired(true)),
    async execute(client, interaction) {
        // Here goes the code
        const role = interaction.options.getRole('role');
        const member = interaction.options.getMember('target');
        member.roles.add(role);

    },
};