const express = require('express')
const ROUTER = express.Router()
const { upload } = require('../middleware/uploadImage')
const {
  getAllPower,
  addPower,
  updatePower,
  deletePower
} = require('../controllers/powerControllers')

ROUTER.get('/', getAllPower)
ROUTER.post('/create', upload.single('img'), addPower)
ROUTER.put('/update/:_id', upload.single('img'), updatePower)
ROUTER.delete('/delete/:_id', deletePower)

module.exports = ROUTER
