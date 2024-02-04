import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : " inactive")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : " inactive")}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : " inactive")}
        >
          Contact
        </NavLink>
        <NavLink
          to="/student"
          className={({ isActive }) => (isActive ? "active" : " inactive")}
        >
          Student
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
