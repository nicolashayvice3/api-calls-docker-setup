const express = require('express')
const path = require('path')

const cowsRoutes = require('./routes/cows')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/cows', cowsRoutes)

module.exports = server
