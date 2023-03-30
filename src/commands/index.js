const apiGetData = require('./apiGetData');
const apiPostData = require('./apiPostData');
const array = require('./array');
const ban = require('./ban');
const botEmbed = require('./botEmbed');
const catPictures = require('./catPictures');
const giveRole = require('./giveRole');
const kick = require('./kick');
const makeProject = require('./makeProject');
const makeQuote = require('./makeQuote');
const ping = require('./ping');
const rememberBirthDay = require('./rememberBirthday');
const role = require('./role');
const commands = require('./showCommands');
const test = require('./test');
const time = require('./time');
const userInformation = require('./userInformation');

module.exports = [
	apiGetData,
	apiPostData,
	array,
	ban,
	botEmbed,
	catPictures,
	commands,
	giveRole,
	makeProject,
	makeQuote,
	role,
	test,
	time,
	userInformation,
	ping,
	rememberBirthDay,
	kick,
];
