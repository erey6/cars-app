const express = require('express')
const mongoose = require('mongoose')
const Car = require('../models/car.js')

const router = express.Router()


router.get('/', (req, res) => {
     Car.find({}, (err, foundCars) => {
          res.json(foundCars)
     })
})

router.post('/', (req, res) => {
     Car.create(req.body, (err, createdCar) => {
          res.json(createdCar)
     })
})

router.put('/:id', (req, res) => {
     Car.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedCar) => {
          res.json(updatedCar)
     })
})

router.delete('/:id', (req, res) => {
     Car.findByIdAndRemove(req.params.id, (err, deletedCar) => {
          res.json(deletedCar)
     })
})

module.exports = router;