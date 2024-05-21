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

const heroRoutes = require('./routes/heroRoutes')
app.use('/api/hero', heroRoutes)

const powerRoutes = require('./routes/powerRoutes')
app.use('/api/power', powerRoutes)

const fusionRoutes = require('./routes/fusionRoutes')
app.use('/api/fusion', fusionRoutes)

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
