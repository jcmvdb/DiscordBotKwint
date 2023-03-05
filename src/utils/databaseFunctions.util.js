const { errorHandler } = require('./errorHandling.util');

function getApiData(path) {
	const url = `https://discord.jcmvdb.com/api/${path}`;
	return fetch(url).then(async (res) => {
		// return res.json();
		console.log(res);
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

module.exports = { getApiData, postApiData };
