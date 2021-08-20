import { useState } from "react";
import { ThemeProvider } from "styled-components";
import OptionsBar from "./components/OptionsBar";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";
import { useTask } from "./providers/tasks";
import GlobalStyle from "./styles/global";

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const { tasks } = useTask();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    console.log(tasks);
  };

  return (
    <>
      <GlobalStyle theme={theme} />
      {/* <ThemeProvider theme={{ theme: theme }}> */}
      <main>
        <h1>Todos</h1>
        <TaskInput />
        {tasks.map((task) => (
          <TaskItem title={task.title} id={task.id} isDone={task.isDone} />
        ))}
        <OptionsBar />
        <button onClick={toggleTheme}>Teste</button>
      </main>
      {/* </ThemeProvider> */}
    </>
  );
}
