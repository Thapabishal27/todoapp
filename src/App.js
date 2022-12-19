import React, { useState } from "react";
import "./App.css";
import icon from "./icon.png";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [listValue, setListValue] = useState([]);

  const handleClick = () => {
    if (!inputValue) {
      alert("add a task ");
    } else {
      setListValue([...listValue, inputValue]);
    }

    setInputValue("");
  };

  const deleteTask = (id) => {
    const updateList = listValue.filter((newlist, number) => {
      return id !== number;
    });
    setListValue(updateList);
  };

  const handleDeleteAll = () => {
    setListValue([]);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && handleClick()) {
      setListValue([...listValue, inputValue]);
      setInputValue("");
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="title">To Do List</h1>
        <input
          type="text"
          placeholder="add a task"
          value={inputValue}
          className="input-field"
          onKeyDown={handleKeyDown}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleClick}>Add items</button>
        <div className="list-items">
          <ul className="lists">
            {listValue.map((listValue, id) => {
              return (
                <li className="listTask" key={id}>
                  {listValue}
                  <div className="delete">
                    <img
                      src={icon}
                      onClick={() => deleteTask(id)}
                      alt="delete"
                    ></img>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        {listValue.length >= 1 && (
          <button className="deleteall" onClick={handleDeleteAll}>
            Delete All
          </button>
        )}
      </div>
    </>
  );
}

export default App;
