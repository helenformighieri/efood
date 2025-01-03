import styled from "styled-components";
import { colors } from "../../styles.ts";

export const ContainerProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;
  padding: 58px;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
`;

export const CardProduto = styled.div`
  width: 100%;
  max-width: 320px;
  background-color: ${colors.pink};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const CardImg = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  color: ${colors.rosaClaro};
  margin: 10px 0;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  color: ${colors.rosaClaro};
  margin: 10px 0;
`;

export const CardButton = styled.button`
  font-size: 14px;
  font-weight: bold;
  padding: 6px;
  background-color: ${colors.branco};
  color: ${colors.pink};
  cursor: pointer;
  border: none;
  text-align: center;

  &:hover {
    background-color: ${colors.rosaMedio};
  }
`;