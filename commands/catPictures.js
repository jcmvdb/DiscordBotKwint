const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("cat")
        .setDescription("get a free cat pictrue"),

    async execute(client, interaction, secret, embedCreator) {
        const catApiURL = "https://api.thecatapi.com/v1/"
        const headers = {
            "x-api-key": `${secret.catKey}`,
            "Content-Type": "application/json",
        }

        const embed = new EmbedBuilder()
            .setTitle("Here a cat image")
            .setDescription("A cat")
            .setColor("#f1d02a")
            .addFields( 
                {name: "Bot name", value: client.user.username}
            )
            .setTimestamp()
            .setFooter({text: "Image from https://thecatapi.com/"})
            .setAuthor({name: interaction.member.user.username})
        
        //get a cat image
        fetch(catApiURL.concat("images/search?format=json"), {"method" : "GET", headers})
        .then( response => 
             response.json()
        ).then(json => 
            interaction.reply({embeds: [EmbedBuilder.from(embed).setImage(json[0].url)]})  
        );
        
        
    },
}