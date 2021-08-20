import { useTask } from "../../providers/tasks";
import * as S from "./styles";

const OptionsBar = () => {
  const { tasks, handleDeleteCompleted } = useTask();

  const tasksLeft = tasks.filter((task) => !task.isDone).length;
  const hasCompletedTasks = tasks.filter((task) => task.isDone).length > 0;

  return (
    <S.Container>
      <label>{tasksLeft} items left</label>
      <S.FilterContainer>
        <label>All</label>
        <label>Active</label>
        <label>Completed</label>
      </S.FilterContainer>
      <S.ClearLabel
        isVisible={hasCompletedTasks}
        onClick={handleDeleteCompleted}
      >
        Clear Completed
      </S.ClearLabel>
    </S.Container>
  );
};

export default OptionsBar;
