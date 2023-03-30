const { client } = require('./services/discordClient.service');
const { prisma } = require('./services/prisma.service');
require('dotenv').config();
(async () => {
	await prisma.$connect();
	console.log('Connected to DataBase');
	await client.login(process.env.TOKEN);
})();
