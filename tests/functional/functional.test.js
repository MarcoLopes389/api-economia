const supertest = require('supertest')
const mongoose = require('mongoose')
const nock = require('nock')
const app = require('../../src/server')
const brapi = require('../../src/apis/brapi')
require('../../src/models/Moedas.model')

const retorno = {
  results: [
    {
      symbol: 'AERI3',
      shortName: 'AERIS       ON      NM',
      longName: 'Aeris Indústria e Comércio de Equipamentos para Geração de Energia S.A.',
      currency: 'BRL',
      regularMarketPrice: 8.55,
      regularMarketDayHigh: 8.6,
      regularMarketDayLow: 8.51,
      regularMarketDayRange: '8.51 - 8.6',
      regularMarketChange: 0.010000229,
      regularMarketChangePercent: 0.1170987,
      regularMarketTime: '2021-04-15T14:37:19.000Z',
      marketCap: 6551121408,
      regularMarketVolume: 362000,
      regularMarketPreviousClose: 8.54,
      regularMarketOpen: 8.54,
      averageDailyVolume10Day: 3470237,
      averageDailyVolume3Month: 5859155,
      fiftyTwoWeekLowChange: 2.5,
      fiftyTwoWeekLowChangePercent: 0.41322312,
      fiftyTwoWeekRange: '6.05 - 13.9',
      fiftyTwoWeekHighChange: -5.3499994,
      fiftyTwoWeekHighChangePercent: -0.38489205,
      fiftyTwoWeekLow: 6.05,
      fiftyTwoWeekHigh: 13.9,
      twoHundredDayAverage: 9.519363,
      twoHundredDayAverageChange: -0.9693632,
      twoHundredDayAverageChangePercent: -0.101830676
    }
  ],
  requestedAt: '2021-04-15T14:52:33.508Z'
}

nock('https://brapi.ga/')
  .persist()
  .get('/api/quote/AERI3')
  .reply(200, retorno)

describe('Funcionalidades essenciais funcionando corretamente', () => {
  beforeAll(() => {
    mongoose.connect('mongodb://localhost/apieconomia')
    if (mongoose.connection) {
      console.log('Conectado')
    } else {
      throw Error('Não foi possível conectar ao banco de dados')
    }
  })

  test('Retornando dados pedidos', async () => {
    const Moeda = mongoose.model('Moedas')
    const { body, status } = await supertest(app).get('/moeda/euro')
    const dados = await Moeda.findOne({ keySearch: 'euro' })

    expect(status).toBe(200)
    expect(body.description).toBe(dados.description)
    expect(body.coin).toBe(dados.coin)
  }, 30000)

  test('Retornando dados esperados das APIs', async () => {
    const resultado = await brapi.get('/quote/AERI3')
    if (resultado.data) {
      expect(resultado.data).toEqual(retorno)
    }
  }, 30000)

  test('Se for enviado conversão de moeda inválida irá retornar status 400', async () => {
    const { status } = await supertest(app).get('/valor/ee')

    expect(status).toBe(400)
  })

  test('Se nenhum parâmetro válido for especificado retorna 400', async () => {
    const { status } = await supertest(app).get('/valor/g')

    expect(status).toBe(400)
  })

  afterAll(() => {
    mongoose.connection.close()
  })
})
