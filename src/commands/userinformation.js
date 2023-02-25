const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    category: "test",
    data: new SlashCommandBuilder()
        .setName("user")
        .setDescription("This give user information")
        .addUserOption(option =>
            option.setName('user')
                .setDescription("select a user")
        ),
    async execute(client, interaction, secret) {
        const joinDate = new Date(interaction.member.joinedTimestamp).getDate();
        const joinDay = new Date(interaction.member.joinedTimestamp).getDay();
        const joinMonth = new Date(interaction.member.joinedTimestamp).getMonth();
        const joinYear = new Date(interaction.member.joinedTimestamp).getFullYear();
        var months = ['jan', "feb", 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec']
        var days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
        const day = new Date(interaction.member.joinedTimestamp).getDay()

        const noUser = "-";
        const user = interaction.options.getUser('user') ?? noUser;

        if (user === "-") {
            const userEmbed = new EmbedBuilder()
                .setTitle(`${interaction.user.username}#${interaction.user.discriminator}`)
                .setDescription(`<@${interaction.user.id}>`)
                .setColor('#443fac')
                .addFields(
                    {name: "server", value: interaction.member.guild.name},
                    // {name: "Joined", value: joinDate + "/" + months[joinMonth] + "/" + joinYear},
                    {name: "Joined", value: `${days[joinDay]}, ${months[joinMonth]} ${joinDate}, ${joinYear}`},
                    {name: "user selected", value: `${user.username}`}
                    // {name: "Registerd", value: date + "/" + months[month] + "/" + year}
                )
                .setThumbnail(`${interaction.user.displayAvatarURL()}`);
            await interaction.reply({embeds: [userEmbed]})
        } else {
            const joinDate = new Date(user.accentColor).getDate();
            const joinDay = new Date(interaction.member.joinedTimestamp).getDay();
            const joinMonth = new Date(interaction.member.joinedTimestamp).getMonth();
            const joinYear = new Date(interaction.member.joinedTimestamp).getFullYear();
            console.log(joinDate);

            const userEmbed = new EmbedBuilder()
                .setTitle(`${user.username}#${user.discriminator}`)
                .setDescription(`<@${user.id}>`)
                .setColor('#3fac7b')
                .addFields(
                    {name: "server", value: interaction.member.guild.name},
                    {name: "Joined", value: `${days[joinDay]}, ${months[joinMonth]} ${joinDate}, ${joinYear}`},
                )
                .setThumbnail(`${user.displayAvatarURL()}`);
            await interaction.reply({embeds: [userEmbed]})




        }
    },
};
