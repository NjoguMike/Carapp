import React, {useState} from 'react'
import cars from './Cars';
import Descritpion from './Description';

function Products() {
   
  const [content, setContent] = useState(cars);

let product

  function handleData(){
      product = cars.map((car) => (
      <div key={car.carname}>
        <h3>{car.carname}</h3>
        <p>{car.description}</p>
        <p>Price: ${car.price}</p>
      </div>
      
  ))
  console.log(product)
}

  return (
    <div>
      <button onClick={handleData}>Products</button>
      <Descritpion products={content}/>
    </div>
    
  );
}

export default Products;