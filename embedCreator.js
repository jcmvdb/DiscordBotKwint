const { EmbedBuilder } = require('discord.js')

//embedDTO expects fields of
// title as String
// fields as [{name :'string1', value: "Some value here"}] (multiple allowed)
// description as String
// footer as String
// client
// interaction
// (optional) image as a url

function createEmbed(embedDTO, colour=generateRandomColour()) {
    const embed = new EmbedBuilder()
        .setTitle(embedDTO.title)
        .addFields(embedDTO.fields)
        .setDescription(embedDTO.description)
        .setAuthor({name:embedDTO.interaction.member.user.username})
        .setColor(colour)
        .setFooter({text: embedDTO.footer})
        .setTimestamp()
    if(embedDTO.image){
        embed.setImage(embedDTO.image)
    }
    return embed;
}

function createBanEmbed(embedDTO, colour=generateRandomColour()) {
    const embed = new EmbedBuilder()
        .setTitle("Ban")
        .addFields([{name: "User banned", value: `${embedDTO.bannedUser}`, inline: true}, {name: "Banned By", value: `${embedDTO.interaction.member.user}`, inline: true}])
        .setDescription( `${embedDTO.bannedUser} banned by ${embedDTO.interaction.member.user}`)
        .setFooter({text:"Someone was banned"})
        .setTimestamp()
        .setColor(colour)
    if(!embedDTO.sentDM) {
        embed.addFields({name : "No DM sent", value:"No DM has been sent because user has DMs closed"})
    }
    return embed;
}

function createKickEmbed(embedDTO, colour=generateRandomColour()) {
    const embed =  new EmbedBuilder()
        .setTitle("Kick")
        .addFields([{name: "User kicked", value: `${embedDTO.kickedUser}`, inline: true}, {name: "Kicked By", value: `${embedDTO.interaction.member.user}`, inline: true}])
        .setDescription( `${embedDTO.kickedUser} kicked by ${embedDTO.interaction.member.user}`)
        .setFooter({text:"Someone was kicked"})
        .setTimestamp()
        .setColor(colour)
    if(!embedDTO.sentDM) {
        embed.addFields({name : "No DM sent", value:"No DM has been sent because user has DMs closed"})
    }
    return embed;
}

function generateRandomColour(){
    return Math.floor(Math.random() * 16777215).toString(16);
}
module.exports = {
    createEmbed,
    createBanEmbed,
    createKickEmbed
}