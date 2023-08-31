import React, { useState} from 'react'
import cars from './Cars';

function Products({ handleData }) {

  function renderProducts(){
    const product = cars.map(car => <li key={car.carname}>{car.carname}</li>)
    return product
  }
  console.log(renderProducts())

  return (
    <button onClick={()=>handleData(renderProducts())}>Products</button>
  );
}

export default Products;