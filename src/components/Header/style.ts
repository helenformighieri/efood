import styled from "styled-components";
import { colors } from "../../styles.ts";

export const Header = styled.header`
  width: 100%;
  color: ${colors.pink};
  font-weight: 900;
  font-size: 18px;
  display: inline-block;
  justify-content: space-between;
  align-items: center;
`;

export const Imagem = styled.div`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 186px;
  padding: 10px;
`;

export const ImagemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 40px;

  & > p {
    margin: 0 50px;
  }

  & > img {
    margin: 0 50px;
  }
`;
