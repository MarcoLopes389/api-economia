const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

mongoose.connect('mongodb://localhost/apieconomia', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = app
