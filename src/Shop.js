import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

function Shop() {
  useEffect(()=>{
    fetchItems();
  },[])

  const [shopItems,setItems] = useState([]);

  const fetchItems = async() => {
    const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
    const items = await data.json()
    setItems(items.data);
    console.log(items.data);
  }

  return (
    <div>
      <h1>Shop page</h1>
      {shopItems.map(e=>(
        <h1 key={Math.random()}>
          <Link to={`/shop/${e.itemId}`}>
            {e.item.name}
          </Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;