import { useState } from "react";
import { useTasksDispatch } from "./TasksContext";
const buttonClass =
  "border-2 border-lime-400 rounded-lg hover:border-sky-500	 px-1 py-0.2 ml-1";
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
    <li className="flex items-center mb-1">
      <input
        className="mr-1"
        type="checkbox"
        checked={task.done}
        onChange={() =>
          dispatch({ type: "changed", task: { ...task, done: !task.done } })
        }
      />
      {isEditing ? (
        <>
          <input
            className="rounded border border-gray-300 px-1 py-0.5"
            style={{
              width: `${editText.length + 1}ch`, // Динамічна ширина через стилі
            }}
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button
            className="border-2 border-lime-500 rounded-lg hover:border-lime-500	 px-1 py-0.2 ml-1"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="border-2 border-lime-700 	 rounded-lg hover:border-orange-500	 px-1 py-0.2 ml-1"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
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
          <button className={buttonClass} onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </>
      )}

      <button
        className="border-2 border-lime-500 rounded-lg hover:border-sky-500	 px-1 py-0.2 ml-1"
        onClick={() => dispatch({ type: "deleted", id: task.id })}
      >
        Delete
      </button>
    </li>
  );
}
