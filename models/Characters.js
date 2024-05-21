const mongoose = require('mongoose')

const CharactersSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  img: { type: String, required: true }
})

const Characters = mongoose.model('Characters', CharactersSchema)
module.exports = Characters
