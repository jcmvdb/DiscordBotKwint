const ban = require('./ban');
const kick = require('./kick');
const catPictures = require('./catPictures');
const giveRole = require('./giveRole');
const makeProject = require('./makeProject');
const makeQuote = require('./makeQuote');
const getQuote = require('./getQuote');
const rememberBirthDay = require('./rememberBirthday');
const showCommands = require('./showCommands');
const ping = require('./ping');
const userInformation = require('./userInformation');

module.exports = [
	ban,
	catPictures,
	showCommands,
	giveRole,
	makeProject,
	makeQuote,
	userInformation,
	ping,
	rememberBirthDay,
	kick,
	getQuote,
];
