import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import NavBar from "./components/NavBar";
import MovieSection from "./components/MovieSection";

function MovieApp() {
  // let isLoggedIn = localStorage.getItem("isLoggedIn");
  // console.log(isLoggedIn);

  // let { pathname } = useLocation;
  // let showNav = pathname == "/" || pathname == "/login";
  // console.log(showNav);

  return (
    <div>
      <BrowserRouter>
        {/* {showNav === true && <NavBar />} */}
        <Routes>
          <Route index element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<MovieSection />} />
          {/* {isLoggedIn && <Route path="/home" element={<MovieSection />} />} */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MovieApp;
