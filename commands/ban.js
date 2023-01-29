const {SlashCommandBuilder, PermissionFlagsBits, ApplicationCommandOptionWithChoicesAndAutocompleteMixin } = require('discord.js');

module.exports = {
    category: "admin",
    data: new SlashCommandBuilder()
        .setName("ban")
        .setDescription("you can ban a person test")
        .addUserOption(option =>
            option
                .setName("user")
                .setDescription("User that needs to be banned")
                .setRequired(true))
        .addStringOption(option =>
            option.setName('reason')
                .setDescription('give reason to ban'))
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),

    async execute(client, interaction, errorHandling) {
        const ownerRole = interaction.guild.roles.cache.find(r => r.name.toLowerCase() === "owner");
        const member = interaction.options.getMember("user")
        if (member.roles.cache.has(ownerRole.id)) {
            return await interaction.reply("Deze persoon kan je niet bannen");
        }
        const reason =  interaction.options.getString("reason")
        await member.send(`Youre banned with the reason of : \n ${reason}`).catch(() => {
            interaction.channel.send(`this bitch has DM closed`);
        });

        await member.ban({ days: 0, reason: reason}).catch(err => {
            errorHandling.errorHandler(err)
        });

        await interaction.reply().catch(err => {
            errorHandling.errorHandler(err)
        })
    },

};