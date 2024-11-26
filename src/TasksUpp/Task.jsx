// Task.jsx
import { useState } from "react";
import { useTasksDispatch } from "./TasksContext";

export default function Task({ task }) {
  const dispatch = useTasksDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  function handleSave() {
    if (editText.trim()) {
      dispatch({
        type: "changed",
        task: { ...task, text: editText },
      });
      setIsEditing(false);
    } else {
      alert("Task cannot be empty!");
    }
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() =>
          dispatch({ type: "changed", task: { ...task, done: !task.done } })
        }
      />
      {isEditing ? (
        <>
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <span
            style={{
              textDecoration: task.done ? "line-through" : "none",
            }}
          >
            {task.text}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}

      <button onClick={() => dispatch({ type: "deleted", id: task.id })}>
        Delete
      </button>
    </li>
  );
}
