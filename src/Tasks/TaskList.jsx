import { useState } from "react";
import { useTasks } from "./TasksContext.jsx";
import { useTasksDispatch } from "./TasksContext.jsx";

export default function TaskList() {
  const tasks = useTasks(); /// Отримує список завдань з TasksContext

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();

  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
        />

        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          dispatch({
            type: "changed",
            task: {
              // Передаємо оновлений об'єкт `task` у поле `task`
              ...task,
              done: e.target.checked, // Змінюємо лише значення `done`
            },
          });
        }}
      />
      {taskContent}
      <button onClick={() => dispatch({ type: "deleted", id: task.id })}>
        Delete
      </button>
    </label>
  );
}
