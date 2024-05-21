require('dotenv').config()
const express = require('express')
const CONNECTION_CLOUDINARY = require('./config/CONNECTCLOUDINARY')
const CONNECTDB = require('./config/CONNECTDB')

const PORT = 3000

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

CONNECTDB()
CONNECTION_CLOUDINARY()

const characterRoutes = require('./routes/characterRoutes')
app.use('/api/characters', characterRoutes)

app.get('*', (req, res, next) => {
  const ERROR = 'URL NOT FOUND'
  next(ERROR)
})

app.use((error, req, res, next) => {
  return res.status(500).send(error)
})
app.listen(PORT, () => {
  console.log(`Server running - Port: ${PORT}`)
})
