import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../css/navbar.css";

function Products() {
  return (
    <div>
      {/* <h1>Products</h1> */}
      <nav>
        <NavLink to="mobiles">Mobile</NavLink>
        <NavLink to="watches">Watches</NavLink>
        <NavLink to="laptops">Laptops</NavLink>
        <NavLink to="fashion">Fashion</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default Products;
