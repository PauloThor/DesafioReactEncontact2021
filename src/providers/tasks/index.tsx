import { useState } from "react";
import { createContext, ReactNode, useContext, useEffect } from "react";
import api from "../../services/api";
import { Task } from "../../types/task";

interface TaskProviderProps {
  children: ReactNode;
}

interface TaskProviderData {
  tasks: Task[];
  handleAddTask: (task: string) => void;
  handleRemoveTask: (id: string) => void;
  toggleIsDoneTask: (id: string) => void;
  handleCompleteAll: () => void;
  handleDeleteCompleted: () => void;
  handleUpdateTask: (id: string, title: string) => void;
}

const TaskContext = createContext<TaskProviderData>({} as TaskProviderData);

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    api.get("/todos").then((res) => setTasks(res.data));
  }, []);

  const handleAddTask = (task: string) => {
    const newTask = {
      title: task,
      id: `${task}-${tasks.length}`,
      isDone: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const handleRemoveTask = (id: string) => {
    const newTasks = tasks.filter((task) => task.id !== id);

    setTasks(newTasks);
  };

  const toggleIsDoneTask = (id: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        const updatedTask = task;
        task.isDone = !task.isDone;

        return updatedTask;
      }

      return task;
    });

    setTasks(updatedTasks);
  };

  const handleCompleteAll = () => {
    const completedTasks = tasks.filter((task) => task.isDone);

    let isDoneOutput = true;

    if (completedTasks.length === tasks.length) {
      isDoneOutput = false;
    }

    const updatedTasks = tasks.map((task) => {
      return { ...task, isDone: isDoneOutput };
    });

    setTasks(updatedTasks);
  };

  const handleDeleteCompleted = () => {
    const updatedTasks = tasks.filter((task) => !task.isDone);
    setTasks(updatedTasks);
  };

  const handleUpdateTask = (id: string, title: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, title: title };
      }

      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        handleAddTask,
        handleRemoveTask,
        toggleIsDoneTask,
        handleCompleteAll,
        handleDeleteCompleted,
        handleUpdateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);
