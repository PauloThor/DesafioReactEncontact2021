import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 10px;

  label {
    padding: 5px;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 160px;
  margin: 0 10px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    width: 200px;
  }
`;

interface ClearLabelProps {
  isVisible?: boolean;
}

export const ClearLabel = styled.label<ClearLabelProps>`
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: all 0.5s ease-in-out;
  cursor: pointer;
`;

interface OptionLabelProps {
  isFocused?: boolean;
}

export const OptionLabel = styled.label<OptionLabelProps>`
  border: ${(props) => (props.isFocused ? "1px solid red" : "none")};
  cursor: pointer;
`;
