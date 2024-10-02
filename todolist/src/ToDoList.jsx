import React, { useRef, useState } from "react";
import "./todolist.css";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

function ToDoList() {
  let [item, setItem] = useState("");
  let [list, setList] = useState([]);
  let [toggle, setToggle] = useState({ show: false, id: "" });
  let editRef = useRef(null);

  let addItem = ({ target: { value } }) => {
    setItem(value);
  };

  let updateList = () => {
    setList([...list, item]);
    setItem("");
  };

  let deleteItem = (id) => {
    let updateList = list.filter((_, index) => id !== index);
    setList(updateList);
    setItem("");
  };

  let editItem = (id) => {
    editRef.current.focus();
    setToggle({ show: true, id });
    setItem(list[id]);
  };

  let updateItem = () => {
    list[toggle.id] = item;
    setList([...list]);
    setItem("");
    setToggle({ show: false });
  };

  let clearAll = () => {
    setList([]);
  };

  return (
    <div className="mainBody">
      <div className="inputHeader">
        <div className="inputSection">
          <input
            type="text"
            placeholder="Add your Item"
            onChange={addItem}
            ref={editRef}
            value={item}
          />
          {toggle.show ? (
            <button onClick={updateItem}>Update</button>
          ) : (
            <button onClick={updateList}>+ Add</button>
          )}
        </div>
      </div>
      <div className="listBody">
        <div className="listSection">
          {list.length !== 0 ? (
            <div className="listContainer">
              <ol>
                {list.map((i, index) => {
                  return (
                    <div key={index} className="listStyle">
                      <li>{i}</li>
                      <div className="optionButtons">
                        <button
                          className="optionButton"
                          onClick={() => {
                            editItem(index);
                          }}
                        >
                          <MdEdit />
                        </button>
                        <button
                          className="optionButton"
                          onClick={() => {
                            deleteItem(index);
                          }}
                        >
                          <MdDelete />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </ol>
              <button onClick={clearAll}>Clear All</button>
            </div>
          ) : (
            <h5>Your To-Do list is Empty</h5>
          )}
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
