/* eslint-disable no-undef */
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/Moedas.model')
const Moeda = mongoose.model('Moedas')
const descritor = require('../crawllers/wikipediaInfos')
const api = require('../apis/apimoeda')

router.get('/valor/:conversao', async (req, res) => {
  const { conversao } = req.params
  if(!conversao){
    return res.json({
      err: "Especifique as moedas para conversão"
    })
  }
  try {
    const resposta = await api.get(`/last/${conversao}`)
    return res.json(resposta.data)
  } catch {
    return res.status(400).json({
      err: "Especifique uma coversão válida"
    })
  }
})

router.get('/valor/:moeda/:dias', async (req, res) => {
  const { moeda, dias } = req.params
  if(!moeda || !dias) {
    return res.status(400).json({
      err: "Especifique os parâmetros"
    })
  }
  try {
    const resposta = await api.get(`/json/daily/${moeda}/${dias}`)
    return res.json(resposta.data)
  } catch {
    return res.status(400).json({
      err: "Especifique informações válidas"
    })
  }
})

router.get('/moeda/:moeda', async (req, res) => {
  const moeda = await Moeda.findOne({ keySearch: req.params.moeda.toLowerCase() })
  if (moeda) {
    return res.json(moeda)
  } else {
    const descricao = await descritor({"articleName": req.params.moeda,
    "lang": "pt"})
    const novamoeda = await Moeda.create({
      keySearch: req.params.moeda.toLowerCase(),
      coin: descricao.title,
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

module.exports = router
