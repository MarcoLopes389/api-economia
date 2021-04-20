const express = require('express')
const router = express.Router()
const api = require('../apis/brapi')

router.get('/cotas/:acao/:interval/:range', async (req, res) => {
  const { interval, range, acao } = req.params
  const resposta = await api.get(`/${acao}?interval=${interval}&range=${range}`)

  return res.json(resposta.data)
})

router.get('/cotas/:acao', async (req, res) => {
  const { acao } = req.params

  const resposta = await api.get(`/${acao}`)
  return res.json(resposta.data)
})

module.exports = router
