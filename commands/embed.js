const { SlashCommandBuilder } = require('discord.js');
const embedCreator = require("../embedCreator.js")

module.exports = {
    category: "test",
    data: new SlashCommandBuilder()
        .setName("embedtest")
        .setDescription("kaas"),
        
    async execute(client, interaction) {
        const embedDTO = {
            title : this.data.name,
            fields : [{name : 'regular field title', value: "Some value here"},
                    {name : "regular field title 2", value :" Some value2 here"}], 
            description: "test desc.",
            client, 
            interaction
        }
        const embed = embedCreator.createEmbed(embedDTO)
        await interaction.reply({embeds: [embed]})
        
    },
};