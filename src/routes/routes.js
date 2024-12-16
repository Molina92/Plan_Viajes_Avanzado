const express = require('express')

const viajesRoutes = require('./viajes.routes')
const medicamentosRoutes = require('./medicamentos.routes')

const app = express()

app.use('/viajes', viajesRoutes)
app.use('/medicamentos', medicamentosRoutes)

module.exports = app

