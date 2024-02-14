import React from "react";
import { useCart } from "../contexts/CartContext";

function Cart() {
  const { items } = useCart();

  const total = items.reduce((a, b) => a + parseFloat(b.price), 0);

  return (
    <div>
      <h1>Cart</h1>
      {items &&
        items.map((item, index) => (
          <h3 key={index}>
            {item.name} - {item.price}
          </h3>
        ))}{" "}
      <h3 style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
        Total Price : {total} Rs
      </h3>
    </div>
  );
}

export default Cart;
