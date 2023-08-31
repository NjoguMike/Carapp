import React, { useState } from 'react'
import Products from './Products';

function About() {
  const [ displayCars, setDisplayCars ] =useState([])

  function handleFormData(cars){
     setDisplayCars(cars)
  }

  const display = displayCars.map(car => <li key={car.carname}><img src={car.image}/><span>{car.carname}</span></li>)
  console.log(displayCars)

  return (
    <div>
        <h2>Details About the App</h2>
        <p>This is an online car selling website that facilitates the buying and selling of vehicles over the internet. It serves as a marketplace for individuals, dealerships, and other automotive businesses to showcase their cars and connect with potential buyers. This website provides a convenient and efficient way for both buyers and sellers to interact, explore options, and complete transactions without the need for physical visits to showrooms or lots.</p>
        <div className='display'>
          {display}
        </div>
        <Products productsData={handleFormData}/>
    </div>
  );
}

export default About;