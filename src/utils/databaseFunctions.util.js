const  { errorHandler } = require("./errorHandling.util")
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
    // console.log(data)
    
    const fetchURL = URL.concat(`${path}?${queryString}&key=${secret.key}`);
    fetch(fetchURL)
        .catch( err => errorHandler(err))
}

function getApiData(path) {
    const url = `https://discord.jcmvdb.com/api/${path}`;
    return fetch(url).then(async res => {
        return res.json();
    });
}

function postApiData(path) {
    // const url = `https://discord.jcmvdb.com/api/${path}`;
    const url = `https://discord.jcmvdb.com/api/command/postData`;
    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            command: "Command1",
            user_id: 4321214421
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
}

module.exports = { getData, sendData, getApiData, postApiData };
