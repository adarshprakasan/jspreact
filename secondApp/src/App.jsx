import "./App.css";
import { students } from "./components/studentDetails";
import Student from "./Student";

function App() {
  return (
    <div>
      {students.map((student) => {
        return (
          <Student key={student.id} sname={student.sname} age={student.age} />
        );
      })}
    </div>
  );
}

export default App;
