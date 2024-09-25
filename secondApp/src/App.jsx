import React, { Children } from "react";
import { students } from "./datas/studentDetails";
import Student from "./Student";
import Employee from "./Employee";

function App() {
  // let empCss={
  //   color: "gold",
  //   font-size: "22px",
  //   font-weight: "400px"
  // }
  return (
    <div>
      {students.map((student) => {
        return (
          <div key={student.id}>
            <Student sname={student.sname} age={student.age} />
            <Employee sname={student.sname} age={student.age} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
