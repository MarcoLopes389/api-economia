const express = require('express')
const router = express.Router()
const api = require('../apis/brapi')

router.get('/cota/:acao/:range', async (req, res) => {
  const { range, acao } = req.params

  try {
    const resposta = await api.get(`/quote/${acao}?interval=1d&range=${range}`)
    return res.json(resposta.data)
  } catch {
    return res.status(400).json({
      err: "Envie dados válidos"
    })
  }
})

router.get('/cota/:acao', async (req, res) => {
  const { acao } = req.params

  const resposta = await api.get(`/quote/${acao}`)
  return res.json(resposta.data)
})

router.get('/cotas/disponiveis', async (req, res) => {

  api.get('/available').then((resposta) => {
    return res.json(resposta)
  }).catch(() => {
    return res.status(500).json({
      status: 500,
      message: "An internal Err Ocurred"
    })
  })
})

module.exports = router
