import { useState, useEffect } from 'react';
import axios from 'axios';
import Cars from './components/cars.js';
import CreateCar from './components/CreateCar.js';
import EditCar from './components/EditCar.js';
import './App.css';

const App = () => {
  const [cars, setCars] = useState([{
    "image": "https://i.imgur.com/An8eclR.jpeg",
    "make": "Audi",
    "model": "A6",
    "fuel": "gas",
    "cylinders": "4",
    "MSRP": 21000,
    "MPG": 18,
    "features": "stuff"}])
  // const [make, setMake] = useState('')
  // const [model, setModel] = useState('')
  // const [fuel, setFuel] = useState('')
  // const [cylinders, setCylinders] = useState('')
  // const [MSRP, setMSRP] = useState(0)
  // const [MPG, setMPG] = useState(0)
  // const [features, setFeatures] = useState('')
  
  const [car, setEditCar ] = useState([{
    "image": "loading",
    "make": "",
    "model": "",
    "fuel": "",
    "cylinders": "",
    "MSRP": 0,
    "MPG": 0,
    "features": ""}])
 
    const deleteCar = (aCar) => {
      axios
        .delete(`http://localhost:3000/car/${aCar._id}`
        ).then(() => {
          axios
            .get('http://localhost:3000/car')
            .then((response) => {
              setCars(response.data)
            })
        })
    }

    const handleCar = (aCar) => {
      setEditCar(aCar)
      console.log(car)
    }


  useEffect(() => {
    axios
      .get('http://localhost:3000/car')
      .then((response) => {
        setCars(response.data)
      })
  }, []
  )

  return (

    <div>
      <h1>My Wheels</h1>
      <Cars 
      cars = {cars}
      deleteCar = {deleteCar}
      handleCar = {handleCar}
      />
      <CreateCar setCars={setCars}/>
      <EditCar 
      car = {car}
      setCars={setCars} />
    </div>


  )

}

export default App;
