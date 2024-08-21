import styled from "styled-components";

import { colors } from "../../styles.ts";

export const ContainerTitles = styled.div`
  width: 1020px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const TitleType = styled.p`
  font-size: 32px;
  font-weight: 100;
  color: ${colors.branco};
  position: absolute;
  top: 20px;

  @media (max-width: 1400px) {
    left: 110px;
  }

  @media (min-width: 1500px) {
    left: 390px;
  }
`;

export const TitleNameRestaurant = styled.p`
  font-size: 32px;
  font-weight: 900;
  color: ${colors.branco};
  position: absolute;
  top: 10px;
  transform: translateY(200px);

  @media (max-width: 1400px) {
    left: 110px;
  }

  @media (min-width: 1500px) {
    left: 390px;
  }
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
