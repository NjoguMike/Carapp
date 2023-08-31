import React from 'react'
import cars from './Cars';
import Form from './Form';

function Descritpion( { products }) {

  const carItem = cars.map( car => <img key={car.carname} style={{maxWidth:"100%", height:"300px"}} src={car.image}/> )
  console.log(cars)

  const product = cars.map((car) => (
    <div key={car.carname}>
      <h3>{car.carname}</h3>
      <p>{car.description}</p>
      <p>Price: ${car.price}</p>
    </div>))

    console.log(product)


  return (
    <div>
        <h2>Car Details</h2>
        <div>
          {carItem}
        </div>
        <h3> Car Description</h3>
          {product}
        <Form />
    </div>
  );
}

export default Descritpion;