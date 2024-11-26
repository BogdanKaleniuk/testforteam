export default function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: tasks.length + 1,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((task) =>
        task.id === action.task.id ? action.task : task
      );
    }
    case "edit": {
      return tasks.map((task) => {
        if (task.id === action.task.id) {
          return action.task;
        } else {
          return task;
        }
      });
    }
    case "deleted": {
      return tasks.filter((task) => task.id !== action.id);
    }
    default: {
      throw new Error("Uncknown action type" + action.type);
    }
  }
}
