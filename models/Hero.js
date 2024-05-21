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
  }
})

const Hero = mongoose.model('Hero', HeroSchema)
module.exports = Hero
