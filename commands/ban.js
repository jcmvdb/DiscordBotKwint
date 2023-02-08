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

        await member.send(`You've been banned from ${interaction.guild.name} with the reason of : ${reason}`)
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
    },

};