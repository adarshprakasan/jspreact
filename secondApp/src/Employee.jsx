import React from "react";
import empStyles from "./css/Employee.module.css";

function Employee({ sname, age }) {
  return (
    <div className={empStyles.demo}>
      <h1>
        My name is {sname} and my age is {age}
      </h1>
    </div>
  );
}

export default Employee;
