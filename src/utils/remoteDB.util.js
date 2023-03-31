async function getApi(path) {
	const url = `https://discord.jcmvdb.com/api/${path}`;
	return await fetch(url);
}

async function postApi(path, data) {
	const url = `https://discord.jcmvdb.com/api/${path}`;
	await fetch(url, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	});
}

module.exports = { getApi, postApi };
