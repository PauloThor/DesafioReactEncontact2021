import { Task } from "../../types/task";
import { useTask } from "../../providers/tasks";
import { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { Button } from "@material-ui/core";

import { FcCancel } from "react-icons/fc";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsCircle } from "react-icons/bs";

import * as S from "./styles";

interface TaskItemProps {
  task: Task;
}

const TaskItem = ({ task }: TaskItemProps) => {
  const [isInEdit, setIsInEdit] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(task.title);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { id, isDone } = task;

  const [editValue, setEditValue] = useState<string>(task.title);

  const { toggleIsDoneTask, handleRemoveTask } = useTask();

  const handleToggleIsInEdit = () => {
    setIsInEdit(!isInEdit);
  };

  const handleEdit = (event: any) => {
    if (event.key === "Enter") {
      setTitle(editValue);
      handleToggleIsInEdit();
      return;
    }

    if (event.key === "Escape") {
      setEditValue(title);
      handleToggleIsInEdit();
    }
  };

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const removeTask = () => {
    handleRemoveTask(id);
    handleToggleModal();
  };

  return (
    <>
      <S.Container id={id} isDone={isDone}>
        {!isInEdit ? (
          <>
            {!isDone ? (
              <BsCircle
                size={20}
                onClick={() => toggleIsDoneTask(id)}
                style={{ opacity: "1" }}
              />
            ) : (
              <AiOutlineCheckCircle
                size={20}
                onClick={() => toggleIsDoneTask(id)}
                style={{ color: "green" }}
              />
            )}
            <S.Title className={"text"} onDoubleClick={handleToggleIsInEdit}>
              {title}
            </S.Title>
            <FcCancel size={20} onClick={handleToggleModal} />
          </>
        ) : (
          <S.TitleEdit
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleEdit}
          />
        )}
      </S.Container>
      <Modal open={isModalOpen} onClose={handleToggleModal}>
        <S.ModalContainer>
          <h4>Do you really want to delete this task?</h4>
          <S.ButtonContainer>
            <Button
              variant="outlined"
              className="confirm_button"
              onClick={removeTask}
            >
              Yes
            </Button>
            <Button
              variant="contained"
              className="cancel_button"
              onClick={handleToggleModal}
            >
              No
            </Button>
          </S.ButtonContainer>
        </S.ModalContainer>
      </Modal>
    </>
  );
};

export default TaskItem;
