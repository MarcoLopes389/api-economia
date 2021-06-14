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

app.get('/', (req, res) => {
  return res.json({
    language: "pt-br",
    instructions: {
      coin: {
        value: "Digite /moeda/sua-conversao",
        info: "Digite /moeda/sua-moeda e se for uma palavra genérica coloque '(moeda)' na frente",
        all: "Digite /moedas"
      },
      actions: {
        value: "Digite /cotas/sua-acao",
        intervalValue: "Digite /cotas/sua-acao/seu-intervalo/dias",
        available: "Digite /cotas/disponiveis"
      }
    }
  })
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
