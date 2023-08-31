import React from 'react'
import cars from './Cars';
import Form from './Form';

function Descritpion( {filteredCars}) {

  const carItem = cars.map( car => <div key={car.carname}><img src={car.image} alt= {`A ${car.carname}.`}/></div> )

  
  const product = filteredCars.map((car) => (
    <div key={car.carname}>
      <h3>{car.carname}</h3>
      <p>{car.description}</p>
      <p>Price: ${car.price}</p>
    </div>))

  return (
    <div>
        <div>
          <h2>Car Details</h2>
            <div className='image-gallery'>
              <ul className='details-card'>
                {carItem}
                <div><span>Picture</span></div>
              </ul>
            </div>
          <h3> Car Description </h3>
        </div>
          {product}
        <Form />
    </div>
  );
}

export default Descritpion;