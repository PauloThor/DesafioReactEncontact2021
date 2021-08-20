import React, { useState } from "react";
import { createContext, ReactNode, useContext, useEffect } from "react";
import { Options } from "../../models/enums/options";
import api from "../../services/api";
import { Task } from "../../types/task";

interface TaskProviderProps {
  children: ReactNode;
}

const { ALL } = Options;

interface TaskProviderData {
  tasks: Task[];
  filterCategory: string;
  handleAddTask: (task: string) => void;
  handleRemoveTask: (id: string) => void;
  toggleIsDoneTask: (id: string) => void;
  handleCompleteAll: () => void;
  handleDeleteCompleted: () => void;
  handleUpdateTask: (id: string, title: string) => void;
  setFilterCategory: React.Dispatch<React.SetStateAction<string>>;
}

const TaskContext = createContext<TaskProviderData>({} as TaskProviderData);

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filterCategory, setFilterCategory] = useState<string>(ALL);

  useEffect(() => {
    api.get("/todos").then((res) => {
      setTasks(res.data);
    });
  }, []);

  const handleAddTask = (task: string) => {
    api.post("/todos", { title: task, isDone: false }).then((res) => {
      setTasks([res.data, ...tasks]);
    });
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
        filterCategory,
        handleAddTask,
        handleRemoveTask,
        toggleIsDoneTask,
        handleCompleteAll,
        handleDeleteCompleted,
        handleUpdateTask,
        setFilterCategory,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);
