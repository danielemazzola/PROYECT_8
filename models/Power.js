const mongoose = require('mongoose')

const powerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  active: {
    type: Boolean,
    default: true
  }
})

const Power = mongoose.model('Power', powerSchema)
module.exports = Power
