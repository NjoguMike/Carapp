import React, { useState} from 'react'
import cars from './Cars';

function Products({ handleData }) {

  const [ product, setProduct ] = useState("")

  function renderProducts(){
    const product = cars.map(car => <li key={car.carname}>{car.carname}</li>)
    return product
  }

  return (
    <button onClick={()=>handleData(renderProducts)}>Products</button>
  );
}

export default Products;