const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const errorHandling = require("../errorHandling")
const embedCreator = require("../embedCreator")

module.exports = {
    category: "admin",
    data: new SlashCommandBuilder()
        .setName("ban")
        .setDescription("you can ban a person test")
        .addUserOption(option =>
            option.setName("user")
                .setDescription("User that needs to be banned")
                .setRequired(true))
        .addStringOption(option =>
            option.setName('reason')
                .setDescription('give reason to ban'))
        .addIntegerOption(option =>
            option.setName("delete-messages")
                .setDescription("How many days of messages to delete"))
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),

    async execute(client, interaction, secret) {
        const member = interaction.options.getMember("user");
        const reason = interaction.options.getString("reason") ?? "none provided";
        const deleteMessageDays = interaction.options.getInteger("delete-messages") 
        
        if (member.permissions.has([PermissionFlagsBits.Administrator])) {
            interaction.reply({content: "You can't ban this user because they're an administrator", ephemeral: true});
            return;
        }

        await member.send(`You've been banned from Programming Bitches with the reason of : ${reason}`)
            .catch(err => errorHandling.errorHandler(err)
        );
        

        const embedDTO = {

        }
        console.log(deleteMessageDays)
        await member.ban({deleteMessageDays, reason}).then(
            interaction.reply({embeds : [embedCreator.createEmbed()], ephemeral: true})
        ).catch( err =>
            errorHandling.errorHandler(err)
        );
        // if (member.roles.cache.has(ownerRole.id)) {
        //     await interaction.reply("Deze persoon kan je niet bannen");
        //     return;
        // }
        
        // await member.send(`Youre banned with the reason of : \n ${reason}`).catch(() => {
        //     interaction.channel.send(`this bitch has DM closed`);
        // });

        // await member.ban({ days: 0, reason: reason}).catch(err => {
        //     errorHandling.errorHandler(err)
        // });

        // await interaction.reply().catch(err => {
        //     errorHandling.errorHandler(err)
        // })
    },

};