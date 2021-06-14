const { Schema, model } = require('mongoose')

const Moedas = new Schema({
  keySearch: {
    type: String,
    required: true,
    unique: true
  },
  coin: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
    unique: true
  },
  resume: {
    type: String,
    required: true,
    unique: true
  }
})

model('Moedas', Moedas)
