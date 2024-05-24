const mongoose = require('mongoose')

const powerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  img: {
    type: String,
    required: false,
    default:
      'https://static.wikia.nocookie.net/dragonballfanon/images/e/e0/Choque_de_poderes_de_bardock_y_chilled.png/revision/latest?cb=20151028042147&path-prefix=es'
  },
  active: {
    type: Boolean,
    default: true
  }
})

const Power = mongoose.model('Power', powerSchema)
module.exports = Power
