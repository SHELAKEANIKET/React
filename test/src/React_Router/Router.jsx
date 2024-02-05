import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import Student from "./Student";
import Student1 from "./Student1";
import Student2 from "./student2";
import PageNotFound from "./PageNotFound";
import SearchParamsHook from "./SearchParamsHook";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Header />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/student" element={<Student />}>
              <Route path="student1" element={<Student1 />} />
              <Route path="student2" element={<Student2 />} />
            </Route>
          </Route>
          <Route path="/search" element={<SearchParamsHook />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
