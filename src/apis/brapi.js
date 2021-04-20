const axios = require('axios').default

const brapi = axios.create({
  baseURL: 'https://brapi.ga/api/quote/'
})

module.exports = brapi
