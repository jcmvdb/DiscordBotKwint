const jsdom = require('jsdom');
const dom = new jsdom.JSDOM("");
const jquery = require("jquery")(dom.window);
const http = require("http");
const secret = require("./secrets/secrets.json");

function getData(path) {
    // jquery.get(`https://jcmvdb.com/${path}`, async function (data) {
        // const array = JSON.parse(data);
        // console.log(Object.values(array)) ;
        // return Object.values(array);
        // return data;
    // });
    const url = "https://jcmvdb.com/discord/public/post"
    const fetchPromise = fetch(url);
    fetchPromise.then(async res =>  {
        const json = await res.json()

        return json;
    })
}

function sendData(hostname, path, interaction, extraData) {
    let data = extraData;

// Build the query string
    const queryString = Object.keys(data).map(key => key + '=' + data[key]).join('&');

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
