import React from 'react'
import cars from './Cars';
import Form from './Form';

function Descritpion( { content }) {

  const carItem = cars.map( car => <img key={car.carname} style={{maxWidth:"100%", height:"300px"}} src={car.image}/> )
  console.log(cars)

  return (
    <div>
        <h2>Car Details</h2>
        <div style={{margin:"50px", display:"flex"}}>
          {carItem}
        </div>
        <h3> Car Description</h3>
          {content}
        <Form />
    </div>
  );
}

export default Descritpion;