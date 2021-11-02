import React, { useState, useEffect } from 'react'
import axios from 'axios'

const EditCar = (props) => {

     const [newImageURL, setNewImageURL] = useState('')
     const [newMake, setNewMake] = useState('')
     const [newModel, setNewModel] = useState('')
     const [newFuel, setNewFuel] = useState('')
     const [newCylinders, setNewCylinders] = useState('')
     const [newMSRP, setNewMSRP] = useState(0)
     const [newMPG, setNewMPG] = useState(0)
     const [newFeatures, setNewFeatures] = useState('')

     const handleNewImageURLChange = (e) => {
          setNewImageURL(e.target.value)
     }

     const handleNewMakeChange = (e) => {
          setNewMake(e.target.value)
     }

     const handleNewModelChange = (e) => {
          setNewModel(e.target.value)
     }

     const handleNewFuelChange = (e) => {
          setNewFuel(e.target.value)
     }

     const handleNewCylindersChange = (e) => {
          setNewCylinders(e.target.value)
     }

     const handleNewMSRPChange = (e) => {
          setNewMSRP(e.target.value)
     }

     const handleNewMPGChange = (e) => {
          setNewMPG(e.target.value)
     }

     const handleNewFeaturesChange = (e) => {
          setNewFeatures(e.target.value)
     }

     const handleEditCarSubmit = (e) => {
          e.preventDefault()

          axios.put('http://localhost:3000/car/' + props.car._id,
               {
                    image: newImageURL,
                    make: newMake,
                    model: newModel,
                    fuel: newFuel,
                    cylinders: newCylinders,
                    MSRP: newMSRP,
                    MPG: newMPG,
                    features: newFeatures
               }).then(() => {
                    axios.get('http://localhost:3000/car').then((response) => {
                         props.setCars(response.data)
                    })
               })
     }

     

     return (
          <div>
               <h1>Edit {props.car.make + " " + props.car.model}</h1>
               <form onSubmit={handleEditCarSubmit}>
                    Image URL: <input type="text" onChange={handleNewImageURLChange} value={props.car.image} /><br />
                    Make: <input type="text" onChange={handleNewMakeChange} value={props.car.make} /><br />
                    Model: <input type="text" onChange={handleNewModelChange} value={props.car.model} /><br />
                    Fuel: <input type="text" onChange={handleNewFuelChange} value={props.car.fuel} /><br />
                    Cylinders: <input type="text" onChange={handleNewCylindersChange} value={props.car.cylinders} /><br />
                    MSRP: <input type="number" onChange={handleNewMSRPChange} value={props.car.MSRP} /><br />
                    MPG: <input type="number" onChange={handleNewMPGChange} value={props.car.MPG} /><br />
                    Features: <input type="text" onChange={handleNewFeaturesChange} value={props.car.features} /><br />
                    <input type="submit" value="Edit Car" />
               </form>
          </div>
     )
}

export default EditCar