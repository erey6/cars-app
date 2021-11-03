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
    "features": "stuff"
  }])
  // const [make, setMake] = useState('')
  // const [model, setModel] = useState('')
  // const [fuel, setFuel] = useState('')
  // const [cylinders, setCylinders] = useState('')
  // const [MSRP, setMSRP] = useState(0)
  // const [MPG, setMPG] = useState(0)
  // const [features, setFeatures] = useState('')

  const [car, setEditCar] = useState([{
    "image": "loading",
    "make": "",
    "model": "",
    "fuel": "",
    "cylinders": "",
    "MSRP": 0,
    "MPG": 0,
    "features": ""
  }])

  const priceFilter = (aPrice) => {
    axios
      .get('http://localhost:3000/car')
      .then((response) => {
        const newData = []
        response.data.forEach(car => {
          if (aPrice === 'above' && car.MSRP > 50000) {
            newData.push(car)
          }
          if (aPrice === 'below' && car.MSRP < 50000) {
            newData.push(car)
          }
          if (aPrice === '') {
            newData.push(car)
          }
        })
        console.log(newData)
        setCars(newData)
      })

  }

  const engineFilter = (engine) => {
    axios
      .get('http://localhost:3000/car')
      .then((response) => {
        const newData = []
        response.data.forEach(car => {
          if (engine === 'gas' && car.fuel.toLowerCase() === 'gas') {
            newData.push(car)
          }
          if (engine === 'electric' && (car.fuel.toLowerCase() === 'hybrid' || car.fuel.toLowerCase() === 'electric')) {
            newData.push(car)
          }
          if (engine === '') {
            newData.push(car)
          }
        })
        setCars(newData)
      })
  }




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

  const handleOnChange = (e) => {
    switch (e.target.id) {
      case 'image':
        setEditCar({ ...car, 'image': e.target.value })
        break;

      case 'make':
        setEditCar({ ...car, 'make': e.target.value })
        break;

      case 'model':
        setEditCar({ ...car, 'model': e.target.value })
        break;

      case 'fuel':
        setEditCar({ ...car, 'fuel': e.target.value })
        break;

      case 'cylinders':
        setEditCar({ ...car, 'cylinders': e.target.value })
        break;

      case 'MSRP':
        setEditCar({ ...car, 'MSRP': e.target.value })
        break;

      case 'MPG':
        setEditCar({ ...car, 'MPG': e.target.value })
        break;

      case 'features':
        setEditCar({ ...car, 'features': e.target.value })
        break;

      default:
        break;
    }
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
        cars={cars}
        deleteCar={deleteCar}
        handleCar={handleCar}
        priceFilter={priceFilter}
        engineFilter={engineFilter}
      />
      <CreateCar setCars={setCars} />
      <EditCar
        car={car}
        setCars={setCars}
        handleOnChange={handleOnChange} />
    </div>


  )

}

export default App;
