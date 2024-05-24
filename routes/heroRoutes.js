const express = require('express')
const ROUTER = express.Router()
const { uploadHero } = require('../middleware/uploadImage')
const {
  getAllHero,
  addHero,
  updateHero,
  deleteHero
} = require('../controllers/heroControllers')

ROUTER.get('/', getAllHero)
ROUTER.post('/create', uploadHero.single('img'), addHero)
ROUTER.put('/update/:_id', uploadHero.single('img'), updateHero)
ROUTER.delete('/delete/:_id', deleteHero)

module.exports = ROUTER
