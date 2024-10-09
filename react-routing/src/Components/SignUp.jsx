import React from "react";
import { useForm } from "react-hook-form";
import "../css/signup.css";

function SignUp() {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let isAlpha = /^[A-Za-z]+$/g;

  let sendFormData = (data) => {
    console.log(data);
  };

  console.log(errors);
  return (
    <div className="formSection">
      <form className="form" onSubmit={handleSubmit(sendFormData)}>
        <h1>Sign Up!</h1>
        <div className="ipFields">
          <div className="ipField">
            <input
              type="text"
              placeholder="Fullname"
              {...register("fullname", {
                required: { value: true, message: "Fullname is Mandatory" },
                minLength: {
                  value: 4,
                  message: "Fullname should contain atleast 4 characters",
                },
                maxLength: {
                  value: 10,
                  message: "Fullname shouldn't exceed 10 characters",
                },
                pattern: {
                  value: isAlpha,
                  message: "Fullname should only contain alphabtets",
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
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
