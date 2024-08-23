import styled from "styled-components";
import { colors } from "../../styles.ts";

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto; 
  position: absolute; 
  top: 20px; 
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%; 
`;

export const TitleType = styled.p`
  font-size: 32px;
  font-weight: 100;
  color: ${colors.branco};
  text-align: left; 
  margin: 0; 
`;

export const TitleNameRestaurant = styled.p`
  font-size: 32px;
  font-weight: 900;
  color: ${colors.branco};
  text-align: left; 
  margin-bottom: 35px; 
`;

export const Imagem = styled.div`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 280px;
  padding: 10px;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
`;
