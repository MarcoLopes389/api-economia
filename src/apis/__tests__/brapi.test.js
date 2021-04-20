const brapi = require('../brapi')
const nock = require('nock')

const dados = {
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
  .reply(200, dados)

describe('APIs retornando o desejado', () => {
  test('Brapi enviando dados de uma ação', async () => {
    const resposta = await brapi.get('/AERI3')

    expect(resposta.data).toEqual(dados)
  })
})
