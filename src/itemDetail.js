import React, { useState, useEffect } from 'react';


function Item({ match }) {
  const [shopItem, setItem] = useState([]);

  useEffect(()=>{
    fetchItem();    
  }, []);

  const fetchItem = async() => {
    const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
    const item = await fetchItem.json();  
    
    setItem(item.data.item)    
  } 

  return (
    <div>
      <h1>Name: {shopItem.name}</h1>
      <h2>Description: {shopItem.description}</h2>            
    </div>
  );
}

export default Item;