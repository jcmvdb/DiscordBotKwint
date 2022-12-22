const { Client, GatewayIntentBits, Routes, Collection } = require("discord.js");
if (process.argv[2].toLowerCase() !== "peter") {
    process.argv[2] = "thierry";
}
const botConfig = require(`./secrets/${process.argv[2].toLowerCase()}.json`);
const fs = require("node:fs");
const path = require('node:path');
const { REST } = require("@discordjs/rest");
console.log(process.argv)

const client = new Client({intents: [GatewayIntentBits.Guilds]});
client.commands = new Collection();
const slashCommands = [];  

client.once("ready", () => {
    console.log(`${client.user.username} is online!`);

    let guildId = botConfig.guildID;
    let clientId = botConfig.clientID;
    let token = botConfig.token;

    const rest = new REST({version: 10}).setToken(token);

    rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: slashCommands })
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

    console.log(`The file ${command.data.name}.js is loaded`);
}

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(client, interaction);
        console.log(interaction.user.username + " heeft commando " + interaction.commandName + " uitgevoerd");
    } catch (error) {
        console.log(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true});
    }
});

client.login(botConfig.token);