const apiGetData = require('./apiGetData');
const apiPostData = require('./apiPostData');
const array = require('./array');
const ban = require('./ban');
const kick = require('./kick');
const botEmbed = require('./botEmbed');
const catPictures = require('./catPictures');
const giveRole = require('./giveRole');
const role = require('./role');
const makeProject = require('./makeProject');
const makeQuote = require('./makeQuote');
const getQuote = require('./getQuote');
const rememberBirthDay = require('./rememberBirthday');
const commands = require('./showCommands');
const test = require('./test');
const time = require('./time');
const ping = require('./ping');
const userInformation = require('./user');

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
	getQuote,
];
