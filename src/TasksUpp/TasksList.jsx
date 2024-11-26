import React from "react";
import { useTasks } from "./TasksContext";
import Task from "./Task";

export default function TasksList() {
  const tasks = useTasks();

  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
}
