const commands = require('../commands');
const { REST, Routes } = require('discord.js');
require('dotenv').config();

const slashCommands = commands.arr.map((command) => command.data.toJSON());

const guildId = process.env.GUILD_ID;
const clientId = process.env.CLIENT_ID;
const token = process.env.TOKEN;

const rest = new REST({ version: 10 }).setToken(token);
console.log(slashCommands);
rest.put(Routes.applicationGuildCommands(clientId, guildId), {
	body: slashCommands,
})
	.then(() => console.log('succesfully registered application commands.'))
	.catch(console.error);
