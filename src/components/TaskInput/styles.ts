import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  svg {
    cursor: pointer;
  }
`;

export const StyledInput = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid orange;
  outline: none;
  border-radius: 10px;
  width: 200px;
  margin-left: 10px;
  font-size: 14px;

  @media (min-width: 768px) {
    width: 500px;
  }
`;
