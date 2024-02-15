import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
// import { fetchProducts } from "../api/api";

const ProductContext = createContext(null);

export const useProduct = () => {
  return useContext(ProductContext);
};

export default function ContextProvider({ children }) {
  const [data, setData] = useState("");
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  //! data fetching
  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  //! add to cart function
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        data,
        setData,
        fetchData,
        cartItems,
        addToCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
