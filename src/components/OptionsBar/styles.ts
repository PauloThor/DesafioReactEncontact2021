import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 200px;
`;

interface ClearLabelProps {
  isVisible?: boolean;
}

export const ClearLabel = styled.label<ClearLabelProps>`
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: all 0.5s ease-in-out;
  cursor: pointer;
`;
