import React, {useState} from 'react'
import cars from './Cars';
import Descritpion from './Description';

function Products({ productsData }) {
   
  const [content, setContent] = useState("");

  function handleSearchData(event){
    const search = event.target.value

    const filtered = cars.filter(car => car.carname.includes(search))

    console.log(content)

    search === "" ? setContent(cars) :  setContent(filtered)

}

  return (
    <div id='details'>
      <form>
          <input type='text' placeholder='search car ....' value={content.carname} onChange={handleSearchData}/>
          <button onSubmit={()=> productsData(content)}>Products</button>
      </form>
      <Descritpion products={content}/>
    </div>
    
  );
}

export default Products;