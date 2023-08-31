import React, {useState} from 'react'
import cars from './Cars';
import Descritpion from './Description';

function Products({ productsData }) {
   
  const [content, setContent] = useState([]);

  function handleSearchData(event){
    const search = event.target.value

    const filtered = cars.filter(car => car.carname.includes(search))

    search === "" ? setContent(cars) :  setContent(filtered)
  }

  return (
    <div id='details'>
      <form onSubmit={(e)=>{e.preventDefault(); productsData(content)}}>
          <input type='text' placeholder='search car ....' value={content.carname} onChange={handleSearchData}/>
          <button>Products</button>
      </form>
      <Descritpion filteredCars={content}/>
    </div>
    
  );
}

export default Products;