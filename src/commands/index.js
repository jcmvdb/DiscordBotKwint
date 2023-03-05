const apiGetData = require('./apiGetData');
const apiPostData = require('./apiPostData');
const array = require('./array');
const ban = require('./ban');
const botEmbed = require('./botEmbed');
const catPictures = require('./catPictures');
const commands = require('./commands');
const giveRole = require('./giveRole');
const makeProject = require('./makeProject');
const makeQuote = require('./makeQuote');
const role = require('./role');
const test = require('./test');
const time = require('./time');
const userInformation = require('./userInformation');
const ping = require('./ping');
const rememberBirthDay = require('./rememberBirthday')
const getQuote = require("./getQuote");

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
	getQuote,
];
