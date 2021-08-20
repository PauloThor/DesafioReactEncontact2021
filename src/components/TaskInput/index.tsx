import { useState } from "react";
import { useTask } from "../../providers/tasks";
import { Container, StyledInput } from "./styles";
import { IoIosArrowDown } from "react-icons/io";

const TaskInput = () => {
  const [taskValue, setTaskValue] = useState<string>("");

  const { handleAddTask, handleCompleteAll } = useTask();

  const submitTask = (event: any) => {
    if (!taskValue) {
      return;
    }

    if (event.key === "Enter") {
      handleAddTask(taskValue);
      setTaskValue("");
    }
  };

  return (
    <Container>
      <IoIosArrowDown size={20} onClick={handleCompleteAll} />
      <StyledInput
        value={taskValue}
        onChange={(e) => setTaskValue(e.target.value)}
        onKeyDown={submitTask}
        placeholder="What task is there to be done?"
      />
    </Container>
  );
};

export default TaskInput;
