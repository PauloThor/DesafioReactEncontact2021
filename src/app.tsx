import { useState } from "react";
import OptionsBar from "./components/OptionsBar";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";
import { Options } from "./models/enums/options";
import { useTask } from "./providers/tasks";
import GlobalStyle from "./styles/global";

const { ALL, ACTIVE } = Options;

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const { tasks, filterCategory } = useTask();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    console.log(tasks);
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
        <section>
          <TaskInput />
          {getTasksByFilter().map((task) => (
            <TaskItem title={task.title} id={task.id} isDone={task.isDone} />
          ))}
          <OptionsBar />
        </section>
        <button onClick={toggleTheme}>Teste</button>
      </main>
    </>
  );
}
