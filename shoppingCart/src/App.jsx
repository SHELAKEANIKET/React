import "./App.css";
import Items from "./components/Items";
import Cart from "./components/Cart";
import CartContext from "./contexts/CartContext";

function App() {
  return (
    <CartContext>
      <Items name="Laptop" price="50000" />
      <Items name="Mobile" price="20000" />
      <Items name="Pendrive" price="1000" />
      <Cart/>
    </CartContext>
  );
}

export default App;
