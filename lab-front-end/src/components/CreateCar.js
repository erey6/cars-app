import React, {useState, useEffect} from 'react'
import axios from 'axios'


const CreateCar = (props) => {

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

     const handleCreateCarSubmit = (e) => {
          e.preventDefault()
          axios.post('http://localhost:3000/car', 
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

     return(
          <div>
               <h1>Add a New Car to Collection</h1>
               <form onSubmit={handleCreateCarSubmit}>
                    Image URL: <input type="text" onChange={handleNewImageURLChange}/><br/>
                    Make: <input type="text" onChange={handleNewMakeChange} /><br/>
                    Model: <input type="text" onChange={handleNewModelChange} /><br/>
                    Fuel: <input type="text" onChange={handleNewFuelChange} /><br/>
                    Cylinders: <input type="text" onChange={handleNewCylindersChange} /><br/>
                    MSRP: <input type="number" onChange={handleNewMSRPChange} /><br/>
                    MPG: <input type="number" onChange={handleNewMPGChange} /><br/>
                    Features: <input type="text" onChange={handleNewFeaturesChange} /><br/>
                    <input type="submit" value="Add New Car" />
               </form>     
          </div>
     )
}

export default CreateCar;