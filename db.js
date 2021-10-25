const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getCows,
  insertCow,
  updatedCow
}

function getCows (db = connection) {
  return db('cows').select()
}

function insertCow (db = connection) {
  return db('users').insert({})
}

function updatedCow (db = connection) {
  
}