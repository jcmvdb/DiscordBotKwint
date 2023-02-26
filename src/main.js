const { client } = require('./services/discordClient.service');
require('dotenv').config();
client.login(process.env.TOKEN);
