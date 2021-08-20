import { useTask } from "../../providers/tasks";
import { Options } from "../../models/enums/options";

import * as S from "./styles";

const { ALL, ACTIVE, COMPLETED } = Options;

const OptionsBar = () => {
  const { tasks, handleDeleteCompleted, filterCategory, setFilterCategory } =
    useTask();

  const tasksLeft = tasks.filter((task) => !task.isDone).length;
  const hasCompletedTasks = tasks.filter((task) => task.isDone).length > 0;

  return (
    <S.Container>
      <label>{tasksLeft} items left</label>
      <S.FilterContainer>
        <S.OptionLabel
          isFocused={filterCategory === ALL}
          onClick={() => setFilterCategory(ALL)}
        >
          All
        </S.OptionLabel>
        <S.OptionLabel
          isFocused={filterCategory === ACTIVE}
          onClick={() => setFilterCategory(ACTIVE)}
        >
          Active
        </S.OptionLabel>
        <S.OptionLabel
          isFocused={filterCategory === COMPLETED}
          onClick={() => setFilterCategory(COMPLETED)}
        >
          Completed
        </S.OptionLabel>
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
