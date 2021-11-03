import React from 'react'




const Cars = (props) => {


    const handleDeleteCar = (car) => {
        props.deleteCar(car);
    }

    const handlePrice = (e) => {
        props.priceFilter(e.currentTarget.value)
    }

    const handleEngine = (e) => {
        props.engineFilter(e.currentTarget.value)
    }


    return (
        <>
            <form>
                <label>Price </label>
                <select onChange={(e) => {
                    handlePrice(e)
                }} name="price" class="filter-dropdown">
                    <option value="">No filter
                    </option>
                    <option value="above">$50,000 and above
                    </option>
                    <option value="below">Below $50,000
                    </option>
                </select>
                <label> Engine type </label>
                <select onChange={(e) => {
                    handleEngine(e)
                }} name="price" class="filter-dropdown">
                    <option value="">No filter
                    </option>
                    <option value="gas">Gas
                    </option>
                    <option value="electric">Hybrid/Electric
                    </option>
                </select>
            </form>


            <h2>Here are your cars</h2>
            <div className="flex-container">
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

        </>

    )

}



export default Cars
