import React from "react";
import "./todolist.css";
import { MdDelete } from "react-icons/md";
import { useState } from "react";

function ToDoList() {
  let [item, setItem] = useState("");
  let [list, setList] = useState([]);

  let updateItem = ({ target: { value } }) => {
    setItem(value);
  };

  let updateList = () => {
    setList([...list, item]);
  };

  let deleteItem = (index) => {
    let updatedList = [];
    for (let i = 0; i < list.length; i++) {
      if (i !== index) {
        updatedList.push(list[i]);
      }
    }
    setList(updatedList);
  };

  return (
    <div className="mainBody">
      <div className="inputHeader">
        <div className="inputSection">
          <input
            type="text"
            placeholder="Add your Item"
            onChange={updateItem}
          />
          <button onClick={updateList}>+ Add</button>
        </div>
      </div>
      <div className="listBody">
        <div className="listSection">
          <ol>
            {list.map((i, index) => {
              return (
                <div key={index} className="listStyle">
                  <li>{i}</li>
                  <button
                    className="deleteButton"
                    onClick={() => {
                      deleteItem(index);
                    }}
                  >
                    <MdDelete />
                  </button>
                </div>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
