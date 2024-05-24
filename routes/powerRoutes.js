const express = require('express')
const ROUTER = express.Router()
const { uploadPower } = require('../middleware/uploadImage')
const {
  getAllPower,
  addPower,
  updatePower,
  deletePower
} = require('../controllers/powerControllers')

ROUTER.get('/', getAllPower)
ROUTER.post('/create', uploadPower.single('img'), addPower)
ROUTER.put('/update/:_id', uploadPower.single('img'), updatePower)
ROUTER.delete('/delete/:_id', deletePower)

module.exports = ROUTER
