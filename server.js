const express = require('express')

const cowsRoutes = require('./routes/cows')

const server = express()

server.engine('hbs', hbs({extname: 'hbs'}))
server.set('view engine', 'hbs')
server.use(express.urlencoded({extended: true}))

server.use('/', cowsRoutes)

module.exports = server
