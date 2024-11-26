import { useState } from "react";
import { useTasksDispatch } from "./TasksContext";

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");
  const dispatch = useTasksDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim() !== "") {
      dispatch({ type: "added", text });
      setText("");
    } else alert("Task cannot be empty!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSubmit} type="submit">
        Add
      </button>
    </form>
  );
}
