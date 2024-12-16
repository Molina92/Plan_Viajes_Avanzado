const express = require('express')

const viajesRoutes = require('./viajes.routes')
const medicamentosRoutes = require('./medicamentos.routes')
const personalRoutes = require('./personal.routes')

const app = express()

app.use('/viajes', viajesRoutes)
app.use('/medicamentos', medicamentosRoutes)
app.use('/personal', personalRoutes)

module.exports = app

