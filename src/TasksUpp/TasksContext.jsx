import { useReducer, createContext, useContext } from "react";
import tasksReducer from "./tasksReducer";

const TasksContext = createContext(null);
const TaskDispatchContext = createContext(null);

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, [
    {
      id: 0,
      text: "Learn React",
      done: false,
    },
    {
      id: 1,
      text: "Build a project",
      done: false,
    },
  ]);

  return (
    <TasksContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TaskDispatchContext);
}
