import React from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";

function NavBar() {
  return (
    <nav>
      <NavLink to="/">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
}

export default NavBar;
