const { SlashCommandBuilder } = require("discord.js")
const { createCatEmbed } = require("../embedCreator")

module.exports = {
    category: "test",
    data: new SlashCommandBuilder()
        .setName("cat")
        .setDescription("get a free cat pictrue"),

    async execute(client, interaction, secret) {
        const URL = "https://api.thecatapi.com/v1/"
        const headers = {
            "x-api-key": `${secret.catKey}`,
            "Content-Type": "application/json",
        }

        fetch(URL.concat("images/search?format=json"), {"method": "GET", headers})
            .then( response =>
                response.json()
            ).then( json => { 
                interaction.reply({embeds: [createCatEmbed({image: json[0].url, client, interaction}, "f1d02a")]})  
    });
    },
}