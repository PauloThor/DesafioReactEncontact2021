import styled from "styled-components";

interface ContainerProps {
  isDone: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  align-items: center;

  svg {
    opacity: 0;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
    border-radius: 50%;
    padding: 2px;

    &:hover {
      border: 1px solid var(--primary);
    }

    &:first-child {
      opacity: ${(props) => (props.isDone ? 1 : 0)};
    }
  }

  &:hover {
    svg {
      opacity: 1;
    }
  }

  p {
    text-decoration: ${(props) => (props.isDone ? "line-through" : "none")};
    opacity: ${(props) => (props.isDone ? "0.5" : "1")};
  }

  .cancel-icon {
    opacity: 1;
    width: 20px;
    height: 20px;

    @media (min-width: 768px) {
      opacity: 0;
      width: 30px;
      height: 30px;
    }
  }

  .check-icon {
    width: 20px;
    height: 20px;
    color: green;

    @media (min-width: 768px) {
      width: 30px;
      height: 30px;
    }
  }

  .uncheck-icon {
    width: 20px;
    height: 20px;

    @media (min-width: 768px) {
      width: 30px;
      height: 30px;
    }
  }
`;

export const Title = styled.p`
  padding: 0 1rem;
  color: ${(props) => (props.theme === "light" ? "#e5bb22" : "#0D2818")};
  width: 200px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;

  @media (min-width: 768px) {
    width: 500px;
  }
`;

export const TitleEdit = styled.input`
  padding: 0 2.3rem;
  text-align: center;
  width: 200px;
  border-radius: 5px;
  font-size: 16px;
  height: 30px;
  display: flex;
  align-items: center;
  border: 1px solid gray;
  outline: none;

  @media (min-width: 768px) {
    width: 500px;
  }
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  background-color: white;
  border-radius: 15px;
  border: 1px solid red;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
  margin: 0 auto;

  .confirm_button {
    border-color: red;
  }

  .cancel_button {
    background-color: orange;

    &:hover {
      filter: brightness(0.9);
      background-color: orange;
    }
  }
`;
