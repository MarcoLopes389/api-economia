/* eslint-disable no-undef */
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/Moedas.model')
const Moeda = mongoose.model('Moedas')
const descritor = require('../crawllers/wikipediaInfos')
const api = require('../apis/apimoeda')

router.get('/moeda/instrucoes', (req, res) => {
  return res.json({
    pesquisando_moedas: 'Use /moedadesejada para retonar informações sobre',
    obs: 'moedas que tem nomes genéricos ou muitos países usam, use /moeda_nacionalidade ou /moeda_(moeda)'
  })
})

router.get('/valor/:conversao', async (req, res) => {
  const { conversao } = req.params
  const resposta = await api.get(`/last/${conversao}`)

  return res.json(resposta.data)
})

router.get('/valor/:moeda/:dias', async (req, res) => {
  const { moeda, dias } = req.params
  const resposta = await api.get(`/json/daily/${moeda}/${dias}`)

  return res.json(resposta.data)
})

router.get('/moeda/:moeda', async (req, res) => {
  const moeda = await Moeda.findOne({ moeda: req.params.moeda })
  if (moeda) {
    return res.json(moeda)
  } else {
    const descricao = await descritor({"articleName": req.params.moeda,
    "lang": "pt"})
      const novamoeda = await Moeda.create({
      coin: req.params.moeda,
      description: descricao.content,
      resume: descricao.summary
    }) 
    return res.json(novamoeda)
  }
})

router.get('/moedas', async (req, res) => {
  const moedas = await Moeda.find()
  if (moedas) {
    return res.json(moedas)
  } else {
    return res.status(404).json({
      err: 404,
      description: 'Não existem moedas registradas no banco de dados ainda'
    })
  }
})

router.get('/moedas/disponiveis', async (req, res) => {
  novoarray = []
  const moedas = await Moeda.find()
  for (i in moedas) {
    novoarray.push(moedas[i].moeda)
  }
  return res.json(novoarray)
})

module.exports = router
