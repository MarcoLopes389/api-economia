const { Schema, model } = require('mongoose')

const Actions = new Schema({
  action: {
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

model('Acoes', Actions)
