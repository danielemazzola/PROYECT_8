require('dotenv').config()
const Power = require('../models/Power')
const mongoose = require('mongoose')

const powers = [
  {
    name: 'Kamehameha'
  },
  {
    name: 'Final Flash'
  },
  {
    name: 'Special Beam Cannon'
  },
  {
    name: 'Spirit Bomb'
  },
  {
    name: 'Galick Gun'
  }
]

mongoose
  .connect(process.env.CONNECT_DDBB)
  .then(async () => {
    const getPowers = await Power.find()
    if (getPowers.length) await Power.collection.drop()
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    for (const power of powers) {
      const newPower = new Power(power)
      await newPower.save()
    }
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  // Por último nos desconectaremos de la DB.
  .finally(() => mongoose.disconnect())
