const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("make-project")
        .setDescription("make a new project")
        .addStringOption(option =>
            option.setName("name")
                .setDescription("name of the project")
                .setRequired(true))
        .addStringOption(option =>
            option.setName("prefix")
                .setDescription("set the prefix for the project")
                .setRequired(true)),
    async execute(client, interaction) {
        let projectName = interaction.options.getString('name');
        let projectPrefix = interaction.options.getString('prefix');
        await interaction.reply(`Project name: \n${projectName} \n\nProject prefix:\n${projectPrefix}`);

        // make a category



        // make the channels
        const channels = ["project-description", "general", "files", "ideas"];
        const emptyArray = [];
        channels.forEach(myFunction)

        async function myFunction(item) {
            // await interaction.reply(`${item}`)
            console.log(`${projectPrefix}-${item}`);
            emptyArray.push(`${projectPrefix}-${item}`);
        }
        console.log(emptyArray);

        // make the role



        // make the message with the role on reaction



    }
}