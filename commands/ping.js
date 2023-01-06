const {SlashCommandBuilder} = require('discord.js');
const databaseFunctions = require("../databaseFunctions");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("get pong back"),
        async execute(client, interaction, jquery) {
            // const data = databaseFunction.getData("discord/public/post");
            // console.log(data);
            // const url = "https://jcmvdb.com/discord/public/post"
            // const fetchPromise = fetch(url);
            // fetchPromise.then(async res =>  {
            //     const json = await res.json()
            //     console.log(json);
            // })
            const data = await databaseFunctions.getData("https://jcmvdb.com/discord/public/post")
            console.log(data)

                // jquery.get('https://jcmvdb.com/discord/public/post', async function (data) {
                //     const array = JSON.parse(data);
                //     const propertyValues = Object.values(array);
                //     const number = propertyValues.length;
                //     const random = Math.floor(Math.random() * number)
                //     await interaction.reply(`${propertyValues[random]["title"]} - ${propertyValues[random]["text"]}`);
                // });
        },
};