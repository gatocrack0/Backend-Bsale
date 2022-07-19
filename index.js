const express = require('express')
const cors = require('cors')
const path = require('path')
require('dotenv').config()

// Crear el servidor de express
const app = express()

// CORS
app.use(cors())

// Directorio Público
app.use(express.static('public'))

// Lectura y parseo del bod
app.use(express.json())

// Rutas
app.use('/api/products', require('./src/routes/products'))
app.use('/api/categories', require('./src/routes/categories'))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'))
})

// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})
