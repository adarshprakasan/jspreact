import React from "react";
// import { Link} from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";

function NavBar() {
  return (
    //!------Link------
    // <nav>
    //   <Link to="/">Home</Link>
    //   <Link to="/product">Products</Link>
    //   <Link to="/about">About Us</Link>
    //   <Link to="/signup">Sign Up</Link>
    // </nav>
    //!------NavLink------
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/product">Products</NavLink>
      <NavLink to="/about">About Us</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
    </nav>
  );
}

export default NavBar;
