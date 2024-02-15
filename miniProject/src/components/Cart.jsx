import React, { useState } from "react";
import { useProduct } from "../context/ContextProvider";

function Cart() {
  const { cartItems } = useProduct();

  const [count,setCount] = useState(0);

  return (
    <div className="cart-container">
      <h1 className="cart-heading">Shopping Cart</h1>
      <div className="cart-item-container">
        {cartItems &&
          cartItems.map((item) => (
            <div className="cart" key={item.id}>
              <div className="single-item">
                <img
                  className="cart-prod-image"
                  src={item.image}
                  alt="product image"
                />
                <p className="cart-prod-price">${item.price}</p>
              </div>
              <div className="quantity">
              <button className="incrementBtn">+</button>
              <h4>{count}</h4>
              <button className="DecrementBtn">-</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Cart;
