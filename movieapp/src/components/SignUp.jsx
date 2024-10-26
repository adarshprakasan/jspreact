import React from "react";
import { useForm } from "react-hook-form";
import "../css/signup.css";
import { NavLink } from "react-router-dom";

function SignUp() {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let formData = (data) => {
    let userData = JSON.parse(localStorage.getItem("datas")) || [];

    let res = userData.some((user) => {
      return user.email === data.email || user.phonenumber === data.phonenumber;
    });

    if (res) {
      alert("User already exists");
    } else {
      userData.push(data);
      localStorage.setItem("datas", JSON.stringify(userData));
      alert("User Registered Successfully");
    }
  };

  let isName = /^[A-Za-z]+$/;
  let isNumber = /^[6-9][0-9]{9}$/;

  return (
    <div className="mainBody">
      <div className="formBody">
        <div className="formTitle">
          <div>
            <h1 className="signuptitle">Sign Up</h1>
          </div>
          <NavLink to="/login">
            <h1>Login</h1>
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
              type="text"
              placeholder="Email"
              {...register("email", {
                required: { value: true, message: "Email is mandatory" },
                minLength: {
                  value: 3,
                  message: "Email should be atleast 3 characters",
                },
              })}
            />
            <div className="ipError">{errors.email?.message}</div>
          </div>
          <div className="ipField">
            <input
              type="tel"
              placeholder="Phone number"
              {...register("phonenumber", {
                required: { value: true, message: "Phone number is mandatory" },
                minLength: {
                  value: 10,
                  message: "Phone number should be atleast 10 characters",
                },
                maxLength: {
                  value: 10,
                  message: "Phone number should be atleast 10 characters",
                },
                pattern: {
                  value: isNumber,
                  message: "Phone number should be only contain numbers",
                },
              })}
            />
            <div className="ipError">{errors.phonenumber?.message}</div>
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
          <div className="ipField">
            <select name="profession" id="profession">
              <option value="select">Profession</option>
              <option
                value="engineer"
                {...register("profession", {
                  required: { value: true, message: "Select a profession" },
                })}
              >
                Engineer
              </option>
              <option
                value="doctor"
                {...register("profession", {
                  required: { value: true, message: "Select a profession" },
                })}
              >
                Doctor
              </option>
              <option
                value="teacher"
                {...register("profession", {
                  required: { value: true, message: "Select a profession" },
                })}
              >
                Teacher
              </option>
              <option
                value="student"
                {...register("profession", {
                  required: { value: true, message: "Select a profession" },
                })}
              >
                Student
              </option>
              <option
                value="others"
                {...register("profession", {
                  required: { value: true, message: "Select a profession" },
                })}
              >
                Others
              </option>
            </select>
            <div className="ipError">{errors.profession?.message}</div>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
