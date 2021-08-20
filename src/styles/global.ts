import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html, body, ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    font-family: 'Roboto Condensed', sans-serif;
    text-align: center;
}

body {
  background-color: ${(props) =>
    props.theme === "light" ? "lightgray" : "gray"}
}

section {
  max-width: 300px;
  margin: 0 auto;
  font-size: 0.8rem;
  background-color: ${(props) =>
    props.theme === "light" ? "white" : "#181A1B"};
  padding: 10px;
  border-radius: 5px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  @media (min-width: 768px) {
    max-width: 500px;
    font-size: 1.1rem;
  }
}

h1 {
  color: ${(props) => (props.theme === "light" ? "#f40909" : "#f7d036")};
}

input {
  background-color: ${(props) =>
    props.theme === "light" ? "white" : "#181A1B"};
    color: ${(props) => (props.theme === "light" ? "black" : "white")};
}

:root{
  --alt-font: 'Poppins', sans-serif; 
  --dark-green: #0D2818;
  --green: #14AF5A;
  --light-green: #16DB65;
  --lighter-green: #A9FDAC;
  --gray: #605F5F;
  --black: #1C1B1B;
}

.text {
  color: ${(props) => (props.theme === "light" ? "#CD781F" : "#F4BA42")};
  transition: all 0.5s ease-in-out;
}

label {
  color: ${(props) => (props.theme === "light" ? "black" : "white")};
  transition: all 0.5s ease-in-out;
  font-size: 0.8rem;
}

.check-icon {
  color: ${(props) => (props.theme === "light" ? "green" : "#72FF72")};
}

.uncheck-icon {
  color: ${(props) => (props.theme === "light" ? "grey" : "white")};
}

.arrow-icon {
  color: ${(props) => (props.theme === "light" ? "black" : "white")};
  width: 20px;
  height: 20px;

  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
}
`;

export default GlobalStyle;
