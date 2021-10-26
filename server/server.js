const express = require('express')
const path = require('path')

const cowsRoutes = require('./routes/cows')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/', cowsRoutes)

module.exports = server
