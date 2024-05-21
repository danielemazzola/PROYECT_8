const express = require('express')
const ROUTER = express.Router()
const { upload } = require('../middleware/uploadImage')
const {
  getAllCharacters,
  addCharacters,
  updateCharacters,
  deleteCharacters
} = require('../controllers/CharactersController')

ROUTER.get('/', getAllCharacters)
ROUTER.post('/create', upload.single('img'), addCharacters)
ROUTER.put('/update/:_id', upload.single('img'), updateCharacters)
ROUTER.delete('/delete/:_id', deleteCharacters)

module.exports = ROUTER
