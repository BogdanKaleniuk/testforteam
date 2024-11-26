import AddTask from "./AddTask";
import { TasksProvider } from "./TasksContext";
import TasksList from "./TasksList.jsx";

export default function TasksUpp() {
  return (
    <TasksProvider>
      <h1>To-Do List</h1>
      <AddTask />
      <TasksList />
    </TasksProvider>
  );
}
