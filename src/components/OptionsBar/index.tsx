import { useTask } from "../../providers/tasks";
import { Options } from "../../models/enums/options";

import * as S from "./styles";
import { useHistory } from "react-router-dom";

const { ALL, ACTIVE, COMPLETED } = Options;

const OptionsBar = () => {
  const { tasks, handleDeleteCompleted, filterCategory, setFilterCategory } =
    useTask();

  const history = useHistory();

  const tasksLeft = tasks.filter((task) => !task.isDone).length;
  const hasCompletedTasks = tasks.filter((task) => task.isDone).length > 0;

  const handleChangeCategory = (category: string) => {
    setFilterCategory(category);
    return history.push(`./${category}`);
  };

  return (
    <S.Container>
      <label>{tasksLeft} items left</label>
      <S.FilterContainer>
        <S.OptionLabel
          isFocused={filterCategory === ALL}
          onClick={() => handleChangeCategory(ALL)}
        >
          All
        </S.OptionLabel>
        <S.OptionLabel
          isFocused={filterCategory === ACTIVE}
          onClick={() => handleChangeCategory(ACTIVE)}
        >
          Active
        </S.OptionLabel>
        <S.OptionLabel
          isFocused={filterCategory === COMPLETED}
          onClick={() => handleChangeCategory(COMPLETED)}
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
