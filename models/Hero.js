const mongoose = require('mongoose')

const HeroSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  img: {
    type: String,
    require: true
  },
  powers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Power'
    }
  ]
})

const Hero = mongoose.model('Hero', HeroSchema)
module.exports = Hero
