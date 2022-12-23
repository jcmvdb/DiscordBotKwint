const {SlashCommandBuilder, PermissionFlagsBits, ApplicationCommandOptionWithChoicesAndAutocompleteMixin } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ban")
        .setDescription("you can ban a person")
        .addUserOption(option =>
            option
                .setName("user")
                .setDescription("User that needs to be banned")
                .setRequired(true))
        .addStringOption(option =>
            option.setName('reason')
                .setDescription('give reason to ban'))
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers | PermissionFlagsBits.KickMembers),

    async execute(client, interaction) {

        let role = await interaction.guild.roles.cache.find(r => r.name.toLowerCase() === "owner");

        let member = interaction.options.getMember("user")

        if (member.roles.cache.has(role.id)) return interaction.reply("Deze persoon kan je niet bannen");

        let reason =  interaction.options.getString("reason")

        await member.send(`Bannen with the reason \n ${reason}`).catch(() => {
            interaction.channel.send(`this bitch has DM closed`);
        });

        await interaction.channel.send(`you haved banned ${member} for the reason ${reason}`)

        await member.ban({ days: 0, reason: reason});
    },

};