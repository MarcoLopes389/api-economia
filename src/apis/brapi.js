const axios = require('axios').default

const brapi = axios.create({
  baseURL: 'https://brapi.ga/api'
})

module.exports = brapi
