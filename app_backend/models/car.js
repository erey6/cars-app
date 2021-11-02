const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
    image: String,
    make: String,
    model: String,
    fuel: String, //gas, hybrid, diesel, elec.etc.,
    cylinders: String,
    MSRP: Number,
    MPG: Number,
    features: String
})
const Car = mongoose.model('Car', carSchema);
module.exports=Car;
