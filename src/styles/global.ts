import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html, body, ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    font-family: 'Roboto Condensed', sans-serif;
}

body {
  background-color: ${(props) =>
    props.theme === "light" ? "white" : "#181A1B"}
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
  color: ${(props) => (props.theme === "light" ? "#CD781F" : "#9e760b")};
}
`;

export default GlobalStyle;
