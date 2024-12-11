import { useState } from "react";
import { useTasksDispatch } from "./TasksContext";

export default function AddTask() {
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
        className="border border-lime-700 rounded-lg px-1 py-0.5 hover:border-sky-500	focus:outline-none focus:ring focus:ring-sky-300 mb-1.5 "
        type="text"
        placeholder="Add a new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="border-4 border-lime-500 rounded-lg hover:border-sky-500	 px-1 py-0.2 ml-1"
        onClick={handleSubmit}
        type="submit"
      >
        Add
      </button>
    </form>
  );
}
