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

app.use((req, res, next) => {
  return res.status(404).json({
    status: 404,
    err: "Não foi encontrado nenhuma rota"
  })
})

module.exports = app
