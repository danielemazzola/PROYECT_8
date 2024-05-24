require('dotenv').config()
const Power = require('../models/Power')
const mongoose = require('mongoose')

const powers = [
  {
    name: 'Kamehameha',
    img: 'https://static.wikia.nocookie.net/dragonballfanon/images/e/e0/Choque_de_poderes_de_bardock_y_chilled.png/revision/latest?cb=20151028042147&path-prefix=es'
  },
  {
    name: 'Final Flash',
    img: 'https://static.wikia.nocookie.net/dragonballfanon/images/e/e0/Choque_de_poderes_de_bardock_y_chilled.png/revision/latest?cb=20151028042147&path-prefix=es'
  },
  {
    name: 'Special Beam Cannon',
    img: 'https://static.wikia.nocookie.net/dragonballfanon/images/e/e0/Choque_de_poderes_de_bardock_y_chilled.png/revision/latest?cb=20151028042147&path-prefix=es'
  },
  {
    name: 'Spirit Bomb',
    img: 'https://static.wikia.nocookie.net/dragonballfanon/images/e/e0/Choque_de_poderes_de_bardock_y_chilled.png/revision/latest?cb=20151028042147&path-prefix=es'
  },
  {
    name: 'Galick Gun',
    img: 'https://static.wikia.nocookie.net/dragonballfanon/images/e/e0/Choque_de_poderes_de_bardock_y_chilled.png/revision/latest?cb=20151028042147&path-prefix=es'
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
