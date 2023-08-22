import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddToDo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (event) => {
    event.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <form onSubmit={addTodoHandler}>
      <input
        type="text"
        placeholder="Enter your todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">add</button>
    </form>
  );
};

export default AddToDo;
