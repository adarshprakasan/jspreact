import React from "react";
import studentStyles from "./css/Student.module.css";

function Student({ sname, age }) {
  return (
    <div className={studentStyles.demo}>
      <h1>
        My name is {sname} and my age is {age}
      </h1>
    </div>
  );
}

export default Student;
