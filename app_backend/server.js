const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

const PORT = 3000
const mongoURI = "mongodb://localhost:27017/carscrud"

app.use(express.json())
app.use(cors())

const carsRouter = require('./controllers/cars.js')
app.use('/car', carsRouter)

app.get('/', (req, res) => {
     res.send('welcome to cars api. make a request on /cars for car data')
})

mongoose.connect(mongoURI, () => {
     console.log('Connected to mongod')
})

app.listen(PORT, () => {
     console.log("listening on port", PORT)
})