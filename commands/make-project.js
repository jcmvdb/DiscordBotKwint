const {SlashCommandBuilder, Guild, ChannelType, PermissionsBitField} = require("discord.js");

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
    async execute(client, interaction, CategoryChannelChildManager, GUILD_CATEGORY) {
        let projectName = interaction.options.getString('name');
        let projectPrefix = interaction.options.getString('prefix');
        // await interaction.reply(`Project name: \n${projectName} \n\nProject prefix:\n${projectPrefix}`);


        // make the role
        const role = await interaction.guild.roles.create({
            name: `${projectName}`,
            color: "#2f7a93"
        });
        // gives the role to the maker of the command
        interaction.member.roles.add(role);

        console.log(role);
        // make the category

        // const roletest = interaction.guild.roles.cache.find(role => role.name === "owner");
        const randCat = await interaction.guild.channels.create({
            name : projectName,
            type: ChannelType.GuildCategory,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: [PermissionsBitField.Flags.ViewChannel],
                },
                {
                    id: role.id,
                    allow: [PermissionsBitField.Flags.ViewChannel],
                }
                ]
        });


        // make the channels
        const channels = ["project-description", "general", "files", "ideas"];
        channels.forEach(
            element =>
                interaction.guild.channels.create({
                name: `${projectPrefix}-${element}`,
                type: ChannelType.GuildText,
                parent: randCat
            })
        );

        await interaction.reply(`name:\n${projectName}\n\nPrefix:\n${projectPrefix}`);

    }
}