import React from "react";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="bg-blue-500 text-slate-100 py-3 px-4">
        <div className="flex justify-between items-center">
          <div>
          <Link to="/">
            <div className="text-2xl font-semibold">Logo</div>
          </Link>
          </div>
          <div className="flex space-x-4">
            <Link to="/" className="py-2 px-4">
                Home
            </Link>
            <Link to="/login">
              <button className="bg-transparent hover:bg-slate-200 text-white hover:text-blue-500 py-2 px-4 border border-slate-200 rounded focus:outline-none">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-slate-200 text-blue-500 hover:bg-blue-500 hover:text-slate-200 py-2 px-4 border border-slate-200 rounded focus:outline-none">
                Signup
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Outlet /> 
    </div>
  );
};

export default Header;
