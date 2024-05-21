const mongoose = require('mongoose')

const HeroSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  img: {
    type: String,
    required: true
  },
  powers: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Powers'
    }
  ]
})

const Hero = mongoose.model('Hero', HeroSchema)
module.exports = Hero
