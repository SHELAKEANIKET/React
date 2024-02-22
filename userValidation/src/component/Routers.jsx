import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import LogIn from "./LogIn";

function Routers() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={<LogIn/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routers;
