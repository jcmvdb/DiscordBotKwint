const jsdom = require('jsdom');
const dom = new jsdom.JSDOM("");
const jquery = require("jquery")(dom.window);
const http = require("http");
const secret = require("./secrets/secrets.json");

function getData(path) {
    const url = `https://jcmvdb.com/${path}`;
    const fetchPromise = fetch(url);
    return fetchPromise.then(async res => {
        return res.json();
    })
}

function sendData(hostname, path, interaction, data) {
// Build the query string
    const queryString = Object.keys(data).map(key => key + '=' + data[key]).join('&').replaceAll(" ", "%20");
// Set up the request options
    const options = {
        hostname,
        port: 80,
        path: `${path}?${queryString}&key=${secret.key}`,
        method: 'GET'
    };

// Make the request
    const req = http.request(options, res => {
        res.setEncoding('utf8');
        res.on('data', chunk => {
            console.log(chunk);
        });
    });

    req.end();
}

module.exports = { getData, sendData };
