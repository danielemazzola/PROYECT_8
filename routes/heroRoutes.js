const express = require('express')
const ROUTER = express.Router()
const { upload } = require('../middleware/uploadImage')
const {
  getAllHero,
  addHero,
  updateHero,
  deleteHero
} = require('../controllers/heroControllers')

ROUTER.get('/', getAllHero)
ROUTER.post('/create', upload.single('img'), addHero)
ROUTER.put('/update/:_id', upload.single('img'), updateHero)
ROUTER.delete('/delete/:_id', deleteHero)

module.exports = ROUTER
