import React, { useState } from "react";
import "./css/style.css";
// import Todos from './Todos';

import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const deleteTodo = (ind) => {
    // e.preventDefault()
    // const newValue = [...todos]
    // newValue.splice( ind , 1)
    // setTodos(newValue)

    const rest = todos.filter((el, i) => i !== ind);
    setTodos(rest);
  };

  const editTodo = (el, ind) => {
    setInput(el);
  };

  const updateTodo = (el, ind) => {
    if (!input) {
    } else {
      const newValue = [...todos];
      newValue[ind] = input;
      setTodos(newValue);
      setInput("");
    }
  };

  const addTodo = () => {
    if (!input) {
    } else {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  return (
    <div className="flex-container">
      <div className="items">
        <div className="header">
          <h3> Todo App</h3>
        </div>

        <div className="main">
          <div className="input">
            <input
              type="text"
              placeholder="Add a todo"
              value={input}
              name="text"
              onChange={handleChange}
              // onChange={e =>{ setInput(e.target.value)}}
            />
            <button className="todo_add" onClick={addTodo} title="Add todo">
              +
            </button>
          </div>
          <div className="todoItems">
            {todos.map((el, ind) => {
              return (
                <div className="todo_Items" key={ind}>
                  <div className="text">
                    <h3> {el}</h3>
                  </div>
                  <div className="icons">
                    <button
                      className="todo_edit"
                      onClick={() => editTodo(el, ind)}
                      title="Edit todo"
                    >
                      <FaEdit color="green" size="14px" />
                    </button>
                    <button
                      className="todo_update"
                      onClick={() => updateTodo(el, ind)}
                      title="Update todo"
                    >
                      {" "}
                      Update
                    </button>
                    <button
                      className="todo_delete"
                      onClick={() => deleteTodo(ind)}
                      title="Delete todo"
                    >
                      <FaRegTrashAlt color="red" size="13px" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
