const ban = require('./ban');
const kick = require('./kick');
const catPictures = require('./catPictures');
const giveRole = require('./giveRole');
const makeProject = require('./makeProject');
const makeQuote = require('./makeQuote');
const getQuote = require('./getQuote');
const rememberBirthDay = require('./rememberBirthday');
const listCommands = require('./listCommands');
const ping = require('./ping');
const userInformation = require('./userInformation');
const showCommand = require('./showCommand');

module.exports = [
	ban,
	catPictures,
	listCommands,
	giveRole,
	makeProject,
	makeQuote,
	userInformation,
	ping,
	rememberBirthDay,
	kick,
	getQuote,
	showCommand,
];
