const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")
const embedCreator = require("../embedCreator")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("cat")
        .setDescription("get a free cat pictrue"),

    async execute(client, interaction, secret) {
        const catApiURL = "https://api.thecatapi.com/v1/"
        const headers = {
            "x-api-key": `${secret.catKey}`,
            "Content-Type": "application/json",
        }

        const embedDTO = {
            title : "Here a cat image",
            fields : [{
                name : "Bot", value : client.user.username
            }],
            description : "A cat",
            footer : "Image from https://thecatapi.com",
            client,
            interaction
        }

        fetch(catApiURL.concat("images/search?format=json"), {"method" : "GET", headers})
            .then( response => 
                response.json()
            ).then(json => 
                interaction.reply({embeds: [embedCreator.createEmbed(embedDTO, "#f1d02a", json[0].url)]})  
            );    
    },
}