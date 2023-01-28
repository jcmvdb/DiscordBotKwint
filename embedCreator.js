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
    const colour = "#" + Math.floor(Math.random() * 16777215).toString(16); 
    console.log(colour);
    return colour;
}
module.exports = {
    createEmbed
}