function getApi(path) {
	const url = `https://discord.jcmvdb.com/api/${path}`;
	return fetch(url).then(async (res) => {
		return res.json();
	});
}

async function postApi(path, data) {
	const url = `https://discord.jcmvdb.com/api/${path}`;
	console.log(data);
	await fetch(url, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	});
}

module.exports = { getApi, postApi };
