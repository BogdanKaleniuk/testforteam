import AddTask from "./AddTask";
import { TasksProvider } from "./TasksContext";
import TasksList from "./TasksList.jsx";

export default function TasksUpp() {
  return (
    <TasksProvider>
      <div className="border border-lime-500 rounded-lg  p-4 max-w-md mx-auto mt-4 rounded">
        <h1>To-Do List</h1>
        <AddTask />
        <TasksList />
      </div>
    </TasksProvider>
  );
}
