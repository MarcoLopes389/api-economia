const { Schema, model } = require('mongoose')

const Moedas = new Schema({
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
