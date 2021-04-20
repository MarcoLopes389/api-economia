const axios = require('axios').default

const moeda = axios.create({
  baseURL: 'https://economia.awesomeapi.com.br/'
})

module.exports = moeda
