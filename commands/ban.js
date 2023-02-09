const { SlashCommandBuilder, PermissionFlagsBits,  } = require('discord.js');
const { errorHandler } = require("../errorHandling")
const { createBanEmbed } = require("../embedCreator")

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
                .setDescription("How many days of messages to delete, max seven"))
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),

    async execute(client, interaction, secret) {
        const member = interaction.options.getMember("user");
        const reason = interaction.options.getString("reason") ?? "none provided";
        const deleteMessageSeconds = interaction.options.getInteger("delete-messages") * 86400
        
        if (member.permissions.has([PermissionFlagsBits.Administrator])) {
            await interaction.reply({content: "You can't ban this user because they're an administrator", ephemeral: true});
            return;
        }


        let sentDM = true;
        await member.send(`You've been banned from ${interaction.guild.name} with the reason of : ${reason}`)
            .catch(async (err) => {
                if (err.code == "50007"){
                    sentDM = false;
                    return;
                }
                errorHandler(err)
        });
    
        const embedDTO = {
            bannedUser : member,
            sentDM,
            interaction,
            client
        }
        
        await member.ban({deleteMessageSeconds, reason}).then( async () => {
            await interaction.reply({embeds : [createBanEmbed(embedDTO)]});
        }
        ).catch( err =>
            errorHandler(err)
        );
    },

};