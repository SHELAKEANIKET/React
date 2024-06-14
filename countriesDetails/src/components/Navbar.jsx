import React from "react";
import logo from "../assets/world.png";

function Navbar({ searchCountry, handleSearch }) {
  return (
    <nav className="py-2 px-5 lg:px-28 flex justify-between items-center fixed top-0 w-full shadow bg-slate-900">
      <div className="flex items-center justify-center gap-1 lg:gap-3">
        <img
          src={logo}
          alt="Logo"
          className="h-8 w-8 lg:h-12 lg:w-12 cursor-pointer"
        />
        <h2 className="text-white lg:text-xl font-medium">Geographica</h2>
      </div>
      <input
        type="text"
        placeholder="Search Country"
        value={searchCountry}
        onChange={handleSearch}
        className="w-40 lg:w-60 p-2 ps-4 text-base rounded-md border-2 font-medium border-gray-900"
      />
    </nav>
  );
}

export default Navbar;
