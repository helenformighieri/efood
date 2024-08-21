import styled from "styled-components";
import { colors } from "../../styles.ts";

export const Header = styled.header`
  width: 100%;
  color: ${colors.pink};
  font-weight: 900;
  font-size: 18px;
  align-items: center;
`;

export const ImagemWrapper = styled.div`
  width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
`;

export const Imagem = styled.div`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 186px;
  padding: 10px;
  display: flex;
  justify-content: center;
`;