const jsdom = require('jsdom');
const dom = new jsdom.JSDOM("");
const jquery = require("jquery")(dom.window);
const http = require("http");
const secret = require("./secrets/secrets.json");

function getData(url) {
    console.log(url)
}

function sendData(hostname, path, interaction, extraData) {
// Set up the data to be sent to the PHP script
//     const data = {
//         username: interaction.user.username,
//         discriminator: interaction.user.discriminator,
//         command: interaction.commandName,
//     };
    let data = extraData;

// Build the query string
    const queryString = Object.keys(data).map(key => key + '=' + data[key]).join('&');

// Set up the request options
    const options = {
        // hostname: 'jcmvdb.com',
        hostname: hostname,
        port: 80,
        path: `${path}?${queryString}&key=${secret.key}`,
        // path: '/discord/public/commandInsert?' + queryString,
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
