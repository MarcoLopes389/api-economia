const awesome = require('../apimoeda')
const nock = require('nock')

const retorno = {
  USDBRL: {
    code: 'USD',
    codein: 'BRL',
    name: 'Dólar Americano/Real Brasileiro',
    high: '5.6209',
    low: '5.5277',
    varBid: '-0.0403',
    pctChange: '-0.72',
    bid: '5.5472',
    ask: '5.5488',
    timestamp: '1618863937',
    create_date: '2021-04-19 17:25:39'
  }
}

nock('https://economia.awesomeapi.com.br/')
  .persist()
  .get('/last/USD-BRL')
  .reply(200, retorno)

test('Conversão de moeda retornada corretamente', async () => {
  const resposta = await awesome.get('/last/USD-BRL')

  expect(resposta.data).toEqual(retorno)
})
