import React, { createContext, useState, useContext } from 'react'

const cartContext = createContext();

export const useCart = () =>{
    return useContext(cartContext);
}

function CartContext({children}) {

const [items,setItems] = useState([]);
  return (
    <cartContext.Provider value={{items,setItems}}>
      {children}
    </cartContext.Provider>
  )
}

export default CartContext
