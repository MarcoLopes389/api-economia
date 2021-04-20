const { Schema, model } = require('mongoose')

const Moedas = new Schema({
  moeda: {
    type: String,
    required: true,
    unique: true
  },
  descricao: {
    type: String,
    required: true
  }
})

model('Moedas', Moedas)
