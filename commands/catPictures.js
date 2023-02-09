const { SlashCommandBuilder } = require("discord.js")
const{ createEmbed } = require("../embedCreator")

module.exports = {
    category: "test",
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
            title: "Here a cat image",
            fields: [{
                name: "Bot", value : client.user.username
            }],
            description: "A cat",
            footer: "Image from https://thecatapi.com",
            client,
            interaction
        }

        fetch(catApiURL.concat("images/search?format=json"), {"method": "GET", headers})
            .then( response =>
                response.json()
            ).then( json =>  { 
                embedDTO.image = json[0].url;
                interaction.reply({embeds: [createEmbed(embedDTO, "f1d02a")]})  
            }
                
            );
    },
}