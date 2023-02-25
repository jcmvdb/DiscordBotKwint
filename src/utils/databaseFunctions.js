const  { errorHandler } = require("./errorHandling")
const secret = require("../../secrets/secrets.json");

function getData(path) {
    const url = `discord.jcmvdb.com/${path}`;
    return fetch(url).then(async res => {
        return res.json();
    })
}

function sendData(path, interaction, data) {
    const URL = "https://discord.jcmvdb.com/"
    const queryString = Object.keys(data).map(key => key + '=' + data[key]).join('&').replaceAll(" ", "%20");
    console.log(data)
    
    const fetchURL = URL.concat(`${path}?${queryString}&key=${secret.key}`);
    fetch(fetchURL)
        .catch( err => errorHandler(err))
}

module.exports = { getData, sendData };
