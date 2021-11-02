import React, { useState, useEffect } from 'react'
import axios from 'axios'

const EditCar = (props) => {

     const handleEditCarSubmit = (car, e) => {
          e.preventDefault()

          axios.put('http://localhost:3000/car/' + props.car._id,
               {
                    image: car.image,
                    make: car.make,
                    model: car.model,
                    fuel: car.fuel,
                    cylinders: car.cylinders,
                    MSRP: car.MSRP,
                    MPG: car.MPG,
                    features: car.features
               }).then(() => {
                    axios.get('http://localhost:3000/car').then((response) => {
                         props.setCars(response.data)
                    })
               })
     }

     return (
          <div>
               <h1>Edit {props.car.make + " " + props.car.model}</h1>
               <form onSubmit={(e) => {handleEditCarSubmit(props.car, e)}}>
                    Image URL: <input id="image" type="text" onChange={props.handleOnChange} value={props.car.image} /><br />
                    Make: <input id="make" type="text" onChange={props.handleOnChange} value={props.car.make} /><br />
                    Model: <input id="model" type="text" onChange={props.handleOnChange} value={props.car.model} /><br />
                    Fuel: <input id="fuel" type="text" onChange={props.handleOnChange} value={props.car.fuel} /><br />
                    Cylinders: <input id="cylinders" type="text" onChange={props.handleOnChange} value={props.car.cylinders} /><br />
                    MSRP: <input id="MSRP" type="number" onChange={props.handleOnChange} value={props.car.MSRP} /><br />
                    MPG: <input id="MPG" type="number" onChange={props.handleOnChange} value={props.car.MPG} /><br />
                    Features: <input id="features" type="text" onChange={props.handleOnChange} value={props.car.features} /><br />
                    <input type="submit" value="Edit Car" />
               </form>
          </div>
     )
}

export default EditCar