const args = require("./argumentHandling")
const {Client, GatewayIntentBits, Routes, Collection, CategoryChannelChildManager, GUILD_CATEGORY} = require("discord.js");
const arguments = args.argHandler(process.argv);
const botConfig = require(`./secrets/${arguments.bot}.json`);
const fs = require("node:fs");
const path = require('node:path');
const {REST} = require("@discordjs/rest");
const jsdom = require('jsdom');
const dom = new jsdom.JSDOM("");
const jquery = require('jquery')(dom.window);
const http = require("http");
const databaseFunction = require('./databaseFunctions');

const client = new Client({intents: [GatewayIntentBits.Guilds]});
client.commands = new Collection();
const slashCommands = [];

client.once("ready", () => {
    console.log(`${client.user.username} is online!`);

    let guildId = botConfig.guildID;
    let clientId = botConfig.clientID;
    let token = botConfig.token;

    const rest = new REST({version: 10}).setToken(token);

    rest.put(Routes.applicationGuildCommands(clientId, guildId), {body: slashCommands})
        .then(() => console.log('succesfully registered application commands.'))
        .catch(console.error);
});

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);

    client.commands.set(command.data.name, command);
    slashCommands.push(command.data.toJSON());

    if (arguments.verbosity === "high") {
        console.log(`The file ${command.data.name}.js is loaded`);
    }
}

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(client, interaction, jquery, databaseFunction, CategoryChannelChildManager,GUILD_CATEGORY);
        console.log(`user: ${interaction.user.username}, has used command: ${interaction.commandName}`);


        // -------------------- BEGIN ---------------------------------

        const testen = {
            username: interaction.user.username,
        discriminator: interaction.user.discriminator,
        command: interaction.commandName,
        }

        databaseFunction.sendData("jcmvdb.com", "/discord/public/commandInsert", interaction, testen);
        // sendData("jcmvdb.com", "/discord/public/commandInsert", interaction, [`${interaction.user.username}`])

        // --------------------- END --------------------------------

    } catch (error) {
        console.log(error);
        await interaction.reply({content: 'There was an error while executing this command!', ephemeral: true});
    }
});

client.login(botConfig.token);