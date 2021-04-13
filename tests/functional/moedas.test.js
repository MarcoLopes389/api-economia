const supertest = require('supertest')
const mongoose = require('mongoose')

describe('Funcionalidades essenciais funcionando corretamente', () => {
  beforeAll(() => {
    mongoose.connect('mongodb://localhost/apieconomia')
    if (mongoose.connection) {
      console.log('Conectado')
    } else {
      throw Error('Não foi possível conectar ao banco de dados')
    }
  })

  it('Retornando dados pedidos', () => {

  })
  it('Retornando dados esperados das APIs', () => {

  })
  afterAll(() => {
    mongoose.connection.close()
  })
})
