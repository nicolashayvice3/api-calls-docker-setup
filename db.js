const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

import { v4 as uuidv4 } from 'uuid';

module.exports = {
  getCows,
  insertCow,
  updateCow
}

function getCows (db = connection) {
  return db('cows').select()
}

function insertCow (cow, db = connection) {
  const { collarId, cowNumber, collarStatus } = cow
  const newCow = { collarId, cowNumber, collarStatus, id: uuidv4()}
  return db('cows').insert(newCow)
}

function updateCow (id, updatedCow, db = connection) {
  return db('cows').where('id', id).update(updatedCow)
}