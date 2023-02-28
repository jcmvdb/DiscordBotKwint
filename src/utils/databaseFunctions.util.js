const { errorHandler } = require('./errorHandling.util');

function sendData(path, interaction, data) {
	const URL = 'https://discord.jcmvdb.com/';
	const queryString = Object.keys(data)
		.map((key) => key + '=' + data[key])
		.join('&')
		.replaceAll(' ', '%20');
	// console.log(data)

	const fetchURL = URL.concat(`${path}?${queryString}&key=${process.env.DB_KEY}`);
	fetch(fetchURL).catch((err) => errorHandler(err));
}

function getApiData(path) {
	const url = `https://discord.jcmvdb.com/api/${path}`;
	return fetch(url).then(async (res) => {
		return res.json();
	});
}

function postApiData(path, data) {
	const url = `https://discord.jcmvdb.com/api/${path}`;
	console.log(data);
	fetch(url, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	});
}

module.exports = { sendData, getApiData, postApiData };
