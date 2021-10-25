const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getCows()
    .then(allCows => {
      res.render('index', {allCows: allCows})
      return null
    })
    .catch(err => {
      res.status(500).send('DATABASE GET ERROR: ' + err.message)
    })
})

router.post('/', (req, res) => {
  db.insertCow(cow)
    .then(users => {
      res.json(users)
      return null
    })
    .catch(err => {
      res.status(500).send('DATABASE POST ERROR: ' + err.message)
    })
})

router.put('/', (req, res) => {
  db.updateCow(cowId, updatedCow)
    .then(updatedCow => {
      res.json(updatedCow)
      return null
    })
    .catch(err => {
      res.status(500).send('DATABASE PUT ERROR: ' + err.message)
    })
})

module.exports = router
