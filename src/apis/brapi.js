const axios = require('axios')

const brapi = axios.create({
  baseURL: 'https://brapi.ga/api/quote/'
})

module.exports = brapi
