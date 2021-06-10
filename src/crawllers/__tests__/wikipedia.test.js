const wikiInfo = require('../wikipediaInfos')

describe('Verificando as funções dos crawllers', () => {
  test('Descritor retornando os dados', async () => {
    const resposta = await wikiInfo({
      "articleName": "Euro",
      "lang": "pt"
    })
    let ok = false

    if (typeof resposta === 'object') {
      ok = true
    } else {
      throw Error('Não chegou o resultado esperado')
    }
    if (resposta.content) {
      ok = true
    } else {
      ok = false
    }
    expect(ok).toBe(true)
  }, 300000)
})
