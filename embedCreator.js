const { EmbedBuilder }  = require("discord.js");
const embed = require("./commands/embed");

function createEmbed(embedDTO, colour=generateRandomColour()) {
    const embed = new EmbedBuilder()
        .setTitle(embedDTO.title)
        .addFields(embedDTO.fields)
        .setDescription(embedDTO.description)
        .setAuthor({name :embedDTO.interaction.member.user.username})
        .setColor(colour)
        .setFooter({text: "kaas"})
        .setTimestamp()



    return embed;
}

function generateRandomColour(){
    let string = "";
    for(let i = 0; i < 3; i++){
        string += Math.floor(Math.random() * 256).toString(16)
        console.log(string)
    }
    return string
}
module.exports = {
    createEmbed
}