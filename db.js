const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getCows,
  insertCow,
  updateCow
}

function getCows (db = connection) {
  return db('cows').select()
}

function insertCow (cow, db = connection) {
  return db('cows').insert(cow)
}

function updateCow (id, updatedCow, db = connection) {
  return db('cows').where('id', id).update(updatedCow)
}