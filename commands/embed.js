const { SlashCommandBuilder } = require('discord.js');
const embedCreator = require("../embedCreator.js")

module.exports = {
    category: "test",
    data: new SlashCommandBuilder()
        .setName("embedtest")
        .setDescription("kaas"),
        
    async execute(client, interaction) {
        const embedDTO = {
            title : "kaas",
            fields : [{name : 'regular field title', value: "Some value here"},
                    {name : "regular field title 2", value :" Some value2 here"}], 
            description: "test desc.",
            client, 
            interaction
        }
        const embed = embedCreator.createEmbed(embedDTO, "#f1d02a")
        await interaction.reply({embeds: [embed]})
        
    },
};