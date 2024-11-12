import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import { useRef, useState } from "react";
import "./todolist.css";
import Icon from "@mdi/react";
import { mdiDelete, mdiPencil } from "@mdi/js";

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
          <TextField
            id="outlined-basic"
            label="Add your item"
            variant="outlined"
            onChange={addItem}
            ref={editRef}
            value={item}
            sx={{ width: "100%", maxWidth: 280 }}
          />
          {toggle.show ? (
            <Button
              variant="contained"
              onClick={updateItem}
              disabled={item.trim() === ""}
              sx={{ height: "55px", backgroundColor: "#93007f" }}
            >
              Update
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={updateList}
              disabled={item.trim() === ""}
              sx={{ height: "55px", backgroundColor: "#93007f" }}
            >
              + Add
            </Button>
          )}
        </div>
      </div>
      <div className="listBody">
        <div className="listSection">
          {list.length !== 0 ? (
            <div className="listContainer">
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                }}
              >
                {list.map((i, index) => (
                  <ListItem
                    className="listStyle"
                    key={index}
                    disableGutters
                    secondaryAction={
                      <div className="optionButtons">
                        <IconButton
                          aria-label="edit"
                          className="optionButton"
                          onClick={() => {
                            editItem(index);
                          }}
                        >
                          <Icon path={mdiPencil} size={1} />
                        </IconButton>
                        <IconButton
                          aria-label="delete"
                          className="optionButton"
                          onClick={() => {
                            deleteItem(index);
                          }}
                        >
                          <Icon path={mdiDelete} size={1} />
                        </IconButton>
                      </div>
                    }
                  >
                    <ListItemText primary={i} />
                  </ListItem>
                ))}
              </List>
              <Button
                variant="contained"
                onClick={clearAll}
                sx={{ backgroundColor: "#93007f" }}
              >
                Clear All
              </Button>
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
