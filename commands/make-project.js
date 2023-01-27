const {SlashCommandBuilder, Guild, ChannelType} = require("discord.js");

module.exports = {
    category: "test",
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
    async execute(client, interaction, CategoryChannelChildManager,GUILD_CATEGORY) {
        let projectName = interaction.options.getString('name');
        let projectPrefix = interaction.options.getString('prefix');
        // await interaction.reply(`Project name: \n${projectName} \n\nProject prefix:\n${projectPrefix}`);

        // make a category
        interaction.guild.channels.create({name : "Test", type: ChannelType.GuildCategory })
        //console.log(client);

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



            await interaction.reply(`name:\n${projectName}\n\nPrefix:\n${projectPrefix}`);

    }
}