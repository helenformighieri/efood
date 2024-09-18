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
  flex-direction: column;
`;

export const ImagemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  & > img {
    margin: 0 20px;
  }
`;

export const Imagem = styled.div`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 186px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleType = styled.p`
  font-size: 32px;
  font-weight: 100;
  color: ${colors.branco};
  margin: 0;
`;

export const TitleNameRestaurant = styled.p`
  font-size: 32px;
  font-weight: 900;
  color: ${colors.branco};
  margin: 10px 0;
`;

export const ContainerProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding: 58px;
  margin: 0 auto; 
  max-width: 1200px; 
  width: 100%; 
`;

export const CardProduto = styled.div`
  width: 100%;
  max-width: 320px;
  height: 380px;
  background-color: ${colors.pink};
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
  padding-botton: 20px;
`;


export const CardImg = styled.img`
  width: 100%;
  padding: 10px;
  height: 167px;
  object-fit: cover;
`;

export const CardTitle = styled.h3`
  color: ${colors.branco};
  font-size: 16px;
  font-weight: 900;
  margin: 10px;
`;

export const CardDescription = styled.p`
  color: ${colors.branco};
  font-size: 14px;
  font-weight: 400;
  margin: 4px;
`;

export const CardButton = styled.button`
  width: 300px;
  padding: 3px;
  background-color: ${colors.branco};
  color: ${colors.pink};
  font-size: 14px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  margin: auto;
  margin-bottom: 10px; 
`;