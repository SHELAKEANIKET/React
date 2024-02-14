import React from "react";
import { useCart } from "../contexts/CartContext";

function Items({ name, price }) {
  const { items, setItems } = useCart();
  
  const handleBtn = () => {
    setItems([...items, { name: name, price: price }]);
  };

  return (
    <div style={{border:'1px solid gray', margin:'10px', padding:'10px'}}>
      <h3>{name}</h3>
      <h4>Price : {price} Rs</h4>
      <button onClick={handleBtn}>Add To Cart</button>
    </div>
  );
}

export default Items;
