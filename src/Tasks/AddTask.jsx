import { useState } from "react";
import { initialTasks } from "./TasksContext.jsx";
import { useTasksDispatch } from "./TasksContext.jsx";

export default function AddTask() {
  const [text, setText] = useState(""); ///для зберігання тексту нового завдання.
  const dispatch = useTasksDispatch(); /// Отримує функцію dispatch через контекст (useTasksDispatch).
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          if (text) {
            dispatch({
              type: "added",
              id: nextId++,
              text: text,
            });
          } else {
            alert("Empty");
          }
        }}
      >
        Add
      </button>
    </>
  );
}

let nextId =
  initialTasks.length > 0
    ? Math.max(...initialTasks.map((task) => task.id)) + 1
    : 0;
