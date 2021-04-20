const { Schema, model } = require('mongoose')

const Valores = new Schema({
  moeda: {
    type: String,
    required: true,
    unique: true
  },
  codinome: {
    type: String,
    required: true,
    unique: true
  },
  valorReal: {
    type: Number,
    required: true
  }
})

model('Valores', Valores)
