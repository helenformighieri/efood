import styled from "styled-components";
import { colors } from "../../styles.ts";

export const Header = styled.header`
  width: 100%;
  color: ${colors.pink};
  font-weight: 900;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImagemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;

  & > p {
    margin: 0px; 
  }

  & > img {
    margin-right: 24%; 
    margin-left: 30%;
  }
`;

export const Imagem = styled.div`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 186px;
  padding: 10px;
`;