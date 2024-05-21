const express = require('express')
const ROUTER = express.Router()
const {
  getAllPower,
  addPower,
  updatePower,
  deletePower
} = require('../controllers/powerControllers')

ROUTER.get('/', getAllPower)
ROUTER.post('/create', addPower)
ROUTER.put('/update/:_id', updatePower)
ROUTER.delete('/delete/:_id', deletePower)

module.exports = ROUTER
