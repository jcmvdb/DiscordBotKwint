const { argHandler } = require("./utils/argumentHandling.util")
const { Client, GatewayIntentBits, Routes, Collection } = require("discord.js");
const { readdirSync } = require("node:fs");
const { join } = require('node:path');
const { REST } = require("@discordjs/rest");
const { sendData } = require('./utils/databaseFunctions.util');
const { errorHandler } = require("./utils/errorHandling.util")

const arguments  = argHandler(process.argv);
const botConfig = require(`../secrets/${arguments.bot}.json`);
const secret = require('../secrets/secrets.json');

const client = new Client({intents: [GatewayIntentBits.Guilds]});
client.commands = new Collection();
const slashCommands = [];

//
//      ===Runs on startup===
//
client.once("ready", () => {
    console.log(`${client.user.username} is online!`);

    const guildId = botConfig.guildID;
    const clientId = botConfig.clientID;
    const token = botConfig.token;

    const rest = new REST({version: 10}).setToken(token);

    rest.put(Routes.applicationGuildCommands(clientId, guildId), {body: slashCommands})
        .then(() => console.log('succesfully registered application commands.'))
        .catch(console.error);
});

const commandsPath = join(__dirname, 'commands');
const commandFiles = readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = join(commandsPath, file);
    const command = require(filePath);

    client.commands.set(command.data.name, command);
    slashCommands.push(command.data.toJSON());

    if (arguments.verbosity === "high") {
        console.log(`The file ${command.data.name}.js is loaded`);
    }
}

//
//      === runs on interactions ===
//
client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(client, interaction, secret);
        console.log(`user: ${interaction.user.username}, has used command: ${interaction.commandName}`);

        const commandDTO = {
            username: interaction.user.username,
            discriminator: interaction.user.discriminator,
            command: interaction.commandName,
        }

        sendData("commandInsert", interaction, commandDTO);
    
    } catch (err) {
        errorHandler(err)
        await interaction.reply({content: 'There was an error while executing this command!', ephemeral: true});
    }
});

client.login(botConfig.token);