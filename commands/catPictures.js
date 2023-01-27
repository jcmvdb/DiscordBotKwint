const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")
const secrets = require("../secrets/secrets.json")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("cat")
        .setDescription("get a free cat pictrue"),

    async execute(client, interaction) {
        const catApiURL = "https://api.thecatapi.com/v1/"
        const headers = {
            "x-api-key": `${secrets.catKey}`,
            "Content-Type": "application/json",
        }
        
        //get a cat image
        const catPromise = fetch(catApiURL.concat("images/search?format=json"), {"method" : "GET", headers})
        catPromise.then(async res => {
            let json = await res.json()
            console.log(json[0].url)
            console.log(json)


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
            .setImage(json[0].url)

            await interaction.reply({embeds: [embed]})
        })
    },
}