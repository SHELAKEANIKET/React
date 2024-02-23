import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import Header from "./Header";
import Home from "./Home";

function Routers() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Header />}>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routers;
