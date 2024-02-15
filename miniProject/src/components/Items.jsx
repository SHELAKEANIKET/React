import React from "react";
import { useProduct } from "../context/ContextProvider";
import { useEffect} from "react";

function Items({item}) {
 const { fetchData,products,addToCart } = useProduct();
 
 useEffect(()=>{
   fetchData()
  },[])

  // const handleAddToCart = () => {
  //   addToCart(products); 
  // };

 return (
    <div className="card-container">
      {
        products && products.map((item)=>(
           <div className="card" key={item.id}>
            <img className="item-img" src={item.image} alt="image" />
            <h3 className="item-category" >{item.category}</h3>
            <h3 className="item-price">Price : ${item.price}</h3>
            <button className="addTocartBtn" onClick={()=>addToCart(item)}>Add To Cart</button>
           </div>
        ))
      }
    </div>
  );
}

export default Items;
