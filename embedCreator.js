const { EmbedBuilder }  = require("discord.js");
//
//embedDTO expects fields of
// title as String
// fields as [{name :'string1', value: "Some value here"}] (multiple allowed)
// description as String
// footer as String
// client
// interaction

function createEmbed(embedDTO, image, colour=generateRandomColour() ) {
    const embed = new EmbedBuilder()
        .setTitle(embedDTO.title)
        .addFields(embedDTO.fields)
        .setDescription(embedDTO.description)
        .setAuthor({name :embedDTO.interaction.member.user.username})
        .setColor(colour)
        .setFooter({text: embedDTO.footer})
        .setTimestamp()
    if(image){
        embed.setImage(image)
    }
    
    return embed;

}

function generateRandomColour(){
    const colour = "#" + Math.floor(Math.random() * 16777215).toString(16); 
    return colour;
}
module.exports = {
    createEmbed
}