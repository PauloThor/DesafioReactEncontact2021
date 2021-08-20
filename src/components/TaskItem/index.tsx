import { useTask } from "../../providers/tasks";
import { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { Button } from "@material-ui/core";

import { FcCancel } from "react-icons/fc";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsCircle } from "react-icons/bs";

import * as S from "./styles";
import { useEffect } from "react";

interface TaskItemProps {
  title: string;
  id: string;
  isDone: boolean;
}

const TaskItem = ({ title, id, isDone }: TaskItemProps) => {
  const [isInEdit, setIsInEdit] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [editValue, setEditValue] = useState<string>("");

  const { toggleIsDoneTask, handleRemoveTask, handleUpdateTask } = useTask();

  const handleToggleIsInEdit = () => {
    setIsInEdit(!isInEdit);
  };

  const handleEdit = (event: any) => {
    if (event.key === "Enter") {
      handleUpdateTask(id, editValue);
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

  useEffect(() => {
    setEditValue(title);
  }, [title]);

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
                className="uncheck-icon"
              />
            ) : (
              <AiOutlineCheckCircle
                onClick={() => toggleIsDoneTask(id)}
                className="check-icon"
              />
            )}
            <S.Title className={"text"} onDoubleClick={handleToggleIsInEdit}>
              {title}
            </S.Title>
            <FcCancel onClick={handleToggleModal} className="cancel-icon" />
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
