import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/signup.css";

function Login() {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let [user, setUser] = useState(false);
  let navigate = useNavigate();

  let formData = (data) => {
    let userData = JSON.parse(localStorage.getItem("datas")) || [];
    let loggedInUser = userData.find((a) => {
      return a.fullname === data.fullname && a.password === data.password;
    });

    if (loggedInUser) {
      setUser(true);
      localStorage.setItem("isLoggedIn", true);
    } else {
      alert("Invalid Credentials");
    }
  };

  if (user) {
    navigate("/home");
  }

  let isName = /^[A-Za-z]+$/;

  return (
    <div className="mainBody">
      <div className="formBody">
        <div className="formTitle">
          <div>
            <h1 className="signuptitle">Login</h1>
          </div>
          <NavLink to="/">
            <h1>Sign Up</h1>
          </NavLink>
        </div>
        <form className="form" onSubmit={handleSubmit(formData)}>
          <div className="ipField">
            <input
              type="text"
              placeholder="Name"
              {...register("fullname", {
                required: { value: true, message: "Fullname is mandatory" },
                minLength: {
                  value: 3,
                  message: "Fullname should be atleast 3 characters",
                },
                maxLength: {
                  value: 12,
                  message: "Fullname should be atleast 12 characters",
                },
                pattern: {
                  value: isName,
                  message: "Fullname should be only alphabets",
                },
              })}
            />
            <div className="ipError">{errors.fullname?.message}</div>
          </div>
          <div className="ipField">
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: { value: true, message: "Password is Mandatory" },
                minLength: {
                  value: 4,
                  message: "Password should contain atleast 4 characters",
                },
                maxLength: {
                  value: 10,
                  message: "Password shouldn't exceed 10 characters",
                },
              })}
            />
            <div className="ipError">{errors.password?.message}</div>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
