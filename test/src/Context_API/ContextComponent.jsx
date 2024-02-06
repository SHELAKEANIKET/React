import React from "react";
import Login from "./Login";
import Profile from "./Profile";
import ContextProvider from "./ContextProvider";

function ContextComponent() {
  return (
    <ContextProvider>
    <h2>useContext hook in react</h2> 
      <Login />
     <br />
      <Profile />
    </ContextProvider>
  );
}

export default ContextComponent;
