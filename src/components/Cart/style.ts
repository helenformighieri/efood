import styled from "styled-components";
import { colors } from "../../styles.ts";

interface CartContainerProps {
  isOpen: boolean;
}

export const CartContainer = styled.div<CartContainerProps>`
  position: fixed;
  top: 0;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 390px;
  height: 100%;
  background-color: ${colors.pink};
  
  color: ${colors.branco};
  transition: right 0.3s ease-in-out;
  z-index: 10000;
  overflow-y: auto;
`;

export const Overlay = styled.div<CartContainerProps>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
`;

export const AvisoCarrinhoVazio = styled.p`
  margin: 20px;
`;

export const ProductCard = styled.li`
  width: 95%;
  height: 100px;
  margin: 9px auto;
  background-color: ${colors.rosaClaro};
  display: flex;
  align-items: center;
  padding: 10px;
  color: ${colors.pink};
  font-size: 16px;
  position: relative;
`;

export const ProductImage = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  margin-right: 10px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 80px; 
`;

export const ProductTitle = styled.h3`
  margin: 0;
`;

export const ProductPrice = styled.p`
  margin: 0;
  font-weight: normal;
  font-size: 14px;
`;

export const TotalContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 0 auto;
  text-align: right;
  font-size: 17px;
  font-weight: bold;
`;

export const RemoveButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const ContinueButton = styled.button`
  width: calc(100% - 20px);
  font-size: 14px;
  padding: 7px 0;
  background-color: ${colors.rosaClaro};
  color: ${colors.pink};
  cursor: pointer;
  margin: 10px;
  text-decoration: none;
  border: none;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  background-color: ${colors.rosaClaro};
  margin-bottom: 10px;
  border: none;
  outline: none;

  &::placeholder {
    color: ${colors.branco};
    background-color: ${colors.rosaClaro}; 
  }

  &:focus {
    background-color: ${colors.rosaClaro}; 
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column; 
  width: 100%;
`;

export const ModalTitle = styled.h2`
  color: ${colors.branco};
  font-size: 20px;
  font-weight: normal;
  margin-bottom: 20px;
  text-align: left; 
  width: 100%; 
`;

export const Label = styled.label`
  width: 100%;
  margin-bottom: 5px;
  font-weight: normal;
  color: ${colors.branco};
  font-size: 14px;
`;

export const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  & > div {
    width: 48%;
  }
`;

export const DeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;

  p {
    color: ${colors.rosaClaro};
    font-size: 13px;
    margin-bottom: 10px;
    font-weight: normal;
  }
`;