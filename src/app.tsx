import { useState } from "react";
import DraggableContainer from "./components/DraggableContainer";
import OptionsBar from "./components/OptionsBar";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";
import { Options } from "./models/enums/options";
import { useTask } from "./providers/tasks";
import GlobalStyle from "./styles/global";
import { BsSun, BsMoon } from "react-icons/bs";

const { ALL, ACTIVE } = Options;

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const { tasks, filterCategory } = useTask();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const getTasksByFilter = () => {
    if (filterCategory === ALL) {
      return tasks;
    }

    if (filterCategory === ACTIVE) {
      return tasks.filter((task) => !task.isDone);
    }

    return tasks.filter((task) => task.isDone);
  };

  return (
    <>
      <GlobalStyle theme={theme} />
      <main>
        <h1>Todos</h1>
        <div onClick={toggleTheme} className="theme-container">
          {theme === "light" ? (
            <BsSun color="yellow" size={30} />
          ) : (
            <BsMoon color="darkblue" size={30} />
          )}
        </div>
        <section>
          <TaskInput />
          <DraggableContainer
            list={getTasksByFilter().map((task) => (
              <TaskItem title={task.title} id={task.id} isDone={task.isDone} />
            ))}
          />
          <OptionsBar />
        </section>
      </main>
    </>
  );
}
