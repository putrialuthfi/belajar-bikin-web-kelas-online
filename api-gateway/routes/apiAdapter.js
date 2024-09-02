const axios = require('axios');

const  {TIMEOUT} = process.env;

module.exports = (baseUrl) => {
    return axios.create({
        baseURL: baseURL,
        timeout: 5000
    })
}