const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getCows()
    .then(allCows => {
      res.json(allCows)
      return null
    })
    .catch(err => {
      res.status(500).send('DATABASE GET ERROR: ' + err.message)
    })
})

router.post('/', (req, res) => {
  const cow = req.body
  db.insertCow(cow)
    .then(newCow => {
      res.status(201).end()
      return null
    })
    .catch(err => {
      res.status(500).send('DATABASE POST ERROR: ' + err.message)
    })
})

router.patch('/', (req, res) => {
  const updatedCow = req.body
  db.updateCow(updatedCow)
    .then(updatedCow => {
      res.status(201).end()
      return null
    })
    .catch(err => {
      res.status(500).send('DATABASE PUT ERROR: ' + err.message)
    })
})

module.exports = router
