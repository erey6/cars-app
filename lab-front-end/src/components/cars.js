import { useEffect, useState } from 'react'




const Cars = (props) => {
    const [filteredCars, setFilteredCars] = useState([{
        "image": "https://i.imgur.com/An8eclR.jpeg",
        "make": "Audi",
        "model": "A6",
        "fuel": "gas",
        "cylinders": "4",
        "MSRP": 21000,
        "MPG": 18,
        "features": "stuff"}])

    const handleDeleteCar = (car) => {
        props.deleteCar(car);
    }
    useEffect(() => {
        setFilteredCars([props])
    }, [])
    return (
        <>
            <form>
                <label>Price </label>
                <select name="price" class="filter-dropdown">
                    <option value="">Filter
                    </option>
                    <option value="above">Above $50,000
                    </option>
                    <option value="below">Below $40,000
                    </option>
                </select>
                <label> Engine type </label>
                <select name="price" class="filter-dropdown">
                    <option value="">Filter
                    </option>
                    <option value="gas">Gas
                    </option>
                    <option value="electric">Hybrid/Electric
                    </option>
                </select>
                <button>Submit filter</button>
            </form>

            <div>
                <h2>Here are your cars</h2>

                {filteredCars.map((car) => {
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
        </>

    )

}



export default Cars
