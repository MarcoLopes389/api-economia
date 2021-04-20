const descritor = require('../Descritor')

describe('Verificando as funções dos crawllers', () => {
  test('Descritor retornando os dados', async () => {
    const resposta = await descritor('euro')
    let ok = false

    if (typeof resposta === 'string') {
      ok = true
    } else {
      throw Error('Não chegou o resultado esperado')
    }
    expect(ok).toBe(true)
  }, 300000)
})
