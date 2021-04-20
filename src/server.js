const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const moedas = require('./controllers/moedas.controller')
const cotacoes = require('./controllers/cotacoes.controller')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

mongoose.connect('mongodb://localhost/apieconomia', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('%c Conectado', 'color: red')
})

app.use('/', moedas)
app.use('/', cotacoes)

module.exports = app
