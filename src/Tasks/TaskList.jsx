import { useState } from "react";
export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} style={{ marginBottom: "10px" }}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false); // Стан редагування

  function handleChange(e) {
    onChange({
      ...task,
      text: e.target.value, // Оновлення тексту завдання
    });
  }

  function handleToggleDone() {
    onChange({
      ...task,
      done: !task.done, // Перемикає стан виконання завдання
    });
  }

  function handleEdit() {
    setIsEditing(true); // Вмикаємо режим редагування
  }

  function handleSave() {
    setIsEditing(false); // Виходимо з режиму редагування
  }

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <input type="checkbox" checked={task.done} onChange={handleToggleDone} />
      {isEditing ? (
        <>
          <input
            type="text"
            value={task.text}
            onChange={handleChange}
            style={{
              textDecoration: task.done ? "line-through" : "none",
            }}
          />
          <button onClick={handleSave}>Save</button>
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
          <button onClick={handleEdit}>Edit</button>
        </>
      )}

      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}
