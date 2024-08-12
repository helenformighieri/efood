import styled from "styled-components";
import { colors } from "../../styles.ts";

export const Header = styled.header`
  width: 100%;
  color: ${colors.pink};
  font-weight: 900;
  font-size: 18px;
  display: flex;
  align-items: center;
`;

export const ImagemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  @media (min-width: 1400px) {
    & > img {
      margin-right: 15%; 
      margin-left: 20%;
    }
  }
    
  @media (max-width: 1500px) {
    & > img {
      margin-right: 34%; 
      margin-left: 17.5%;
    }
  }
`;

export const Imagem = styled.div`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 186px;
  padding: 10px;
`;