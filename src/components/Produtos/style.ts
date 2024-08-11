import styled from "styled-components";
import { colors } from "../../styles.ts";

export const ContainerProdutos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px;
`;

export const CardProduto = styled.div`
  width: 320px;
  height: 338px;
  background-color: ${colors.pink};
  margin: 25px; /* Adicione uma margem para espaçamento entre os cards */
`;

export const CardImg = styled.img`
  width: 304px;
  height: 167px;
  margin: 5px 5px 0 7px;
`;

export const CardTitle = styled.h3`
  color: ${colors.branco};
  font-size: 16px;
  font-weight: 900;
  margin: 5px 5px 0 7px;
`;

export const CardDescription = styled.p`
  color: ${colors.branco};
  font-size: 14px;
  font-weight: 400;
  margin: 20px 5px 0 7px;
`;

export const CardButton = styled.button`
  width: 304px;
  height: 24px;
  background-color: ${colors.branco};
  color: ${colors.pink};
  font-size: 14px;
  font-weight: 700;
  border: none;
  margin: 15px 5px 0 7px;
`;