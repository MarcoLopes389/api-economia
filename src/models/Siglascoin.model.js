const { Schema, model } = require('mongoose')

const Siglas = new Schema({
  coin: {
    type: String,
    required: true,
    unique: true
  },
  acronyms: {
    type: String,
    require: true,
    unique: true
  }
})

model('Siglas', Siglas)
