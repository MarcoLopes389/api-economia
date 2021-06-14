const express = require('express')
const router = express.Router()
const api = require('../apis/brapi')

router.get('/cotas/:acao/:interval/:range', async (req, res) => {
  const { interval, range, acao } = req.params

  try {
    const resposta = await api.get(`/quote/${acao}?interval=${interval}&range=${range}`)
    return res.json(resposta.data)
  } catch {
    return res.status(400).json({
      err: "Envie dados válidos"
    })
  }
})

router.get('/cotas/:acao', async (req, res) => {
  const { acao } = req.params

  const resposta = await api.get(`/quote/${acao}`)
  return res.json(resposta.data)
})

router.get('/cotas/disponveis', async (req, res) => {
  const resposta = await api.get('/available')

  return res.json(resposta)
})

module.exports = router
