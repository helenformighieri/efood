import styled, { createGlobalStyle } from "styled-components";

export const colors = {
  rosaClaro: "#FFEBD9",
  rosaMedio: "#EE8D8D",
  pink: "#E66767",
  branco: "#FFF8F2",
};

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body.modal-open {
    overflow: hidden;
  }
`;

export const Logo = styled.img`
  width: 125px;
  height: 56px;
  display: flex;
  margin: 40px auto;
`;
