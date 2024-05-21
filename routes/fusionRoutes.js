const express = require('express')
const ROUTER = express.Router()
const { fusionController } = require('../controllers/fusionController')

ROUTER.post('/', fusionController)
module.exports = ROUTER
