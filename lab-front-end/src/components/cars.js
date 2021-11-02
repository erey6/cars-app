import { useState } from 'react'




const Cars = (props) => {

    const handleDeleteCar = (car) => {
        props.deleteCar(car);
    }

    return (
        <div>
            <h1>Here are your cars</h1>
            {props.cars.map((car) => {
                return (
                    <div className="card" key={car._id}>
                        <img src={car.image} />
                        <h2>{car.make}</h2>
                        <h3>{car.model}</h3>
                        <ul>
                            <li>Fuel: {car.fuel}</li>
                            <li>Engine: {car.fuel}</li>
                            <li>MPG: {car.MPG}</li>
                            <li>Price: {car.MSRP}</li>
                            <li>{car.features}</li>
                        </ul>
                        <button onClick={() => {
                            props.handleCar(car)
                        }}>Edit this Car</button>
                        <button onClick={() => {
                            handleDeleteCar(car)
                        }}>Delete this Car</button>
                        
                    </div>
                )
            })}

        </div>


    )
}



export default Cars
