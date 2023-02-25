const validArguments = {
	bot: ['peter', 'thierry'],
	verbosity: ['low', 'high'],
};
const defaultValues = {
	bot: 'peter',
	verbosity: 'low',
};

function argHandler(args) {
	const botName = botNameFromArgs(args);
	const botConfig = require(`../../secrets/${botName}.json`);
	defaultValues.verbosity = botConfig.verbosity;
	let verbosity = botConfig.verbosity;
	if (args.includes('--v')) {
		verbosity = args[args.indexOf('--v') + 1];
	}
	let JSONargs = {};
	JSONargs.bot = botName;
	JSONargs.verbosity = verbosity;

	if (!validArguments.verbosity.includes(JSONargs.verbosity)) {
		JSONargs.verbosity = defaultValues.verbosity;
	}
	console.log(JSONargs);
	return JSONargs;
}

function botNameFromArgs(args) {
	const botName = args?.[2]?.toLowerCase();
	const matchesNames = botName === 'peter' || botName === 'prod';
	return matchesNames ? 'peter' : 'thierry';
}

module.exports = {
	argHandler,
};
