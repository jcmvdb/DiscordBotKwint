const {SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    category: "test",
    data: new SlashCommandBuilder()
        .setName("kick")
        .setDescription("you can kick a person")
        .addUserOption(option =>
            option
                .setName("user")
                .setDescription("User that needs to be banned")
                .setRequired(true))
        .addStringOption(option =>
            option.setName('reason')
                .setDescription('give reason to ban'))
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers | PermissionFlagsBits.KickMembers),

    async execute(client, interaction, secret) {
        const reason = interaction.options.getString("reason") ?? "none provided"
        const role =  interaction.guild.roles.cache.find(r => r.name.toLowerCase() === "owner");
        const member = interaction.options.getMember("user")
        

        if(member.roles.cache.has(role.id)) {
            interaction.reply("You can't kick this person");
            return;
        }
        

        await member.send(`kicked with the reason : \n${reason}`).catch(() => {
            interaction.reply(`this bitch has DM closed`);
        });

        
        await member.kick({ days: 0, reason: reason}).then(
            await interaction.reply(`you kicked ${member} for the reason ${reason}`)
        )
    },

};