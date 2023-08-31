import React from 'react'
import cars from './Cars';
import Descritpion from './Description';

function Products({ handleData }) {

    const item = cars.map(car => car)

  // function handleData(){

  // }

  return (
    <div>
      <button>Products</button>
      <Descritpion product={item}/>
    </div>
    
  );
}

export default Products;