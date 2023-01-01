const {SlashCommandBuilder} = require('discord.js');
// const http = require("http");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("make-quote")
        .setDescription("Send data to the server using the API")
        .addStringOption(option =>
            option.setName('title')
                .setDescription('The input to echo back')
                .setRequired(true))
        .addStringOption(option =>
            option.setName("text")
                .setDescription("description")
                .setRequired(true)),
    async execute(client, interaction, jquery, http) {
        // const noOption = 'Er is geen reden gegeven';
        // let test = interaction.options.getString('input');
        let title = interaction.options.getString("title");
        let text = interaction.options.getString("text");


        await interaction.reply(`Title:\n**${title}**\n\nText\n**${text}**`);

// Set up the data to be sent to the PHP script
        const data = {
            title: title,
            text: text
        };

// Build the query string
        const queryString = Object.keys(data).map(key => key + '=' + data[key]).join('&');

// Set up the request options
        const options = {
            hostname: 'jcmvdb.com',
            port: 80,
            path: '/discord/public/test?' + queryString,
            method: 'GET'
        };

// Make the request
        const req = http.request(options, res => {
            res.setEncoding('utf8');
            res.on('data', chunk => {
                console.log(chunk);
            });
        });

        req.end();

    },
};