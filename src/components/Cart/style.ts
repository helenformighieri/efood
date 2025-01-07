import styled from "styled-components";
import { colors } from "../../styles.ts";

interface CartContainerProps {
  isOpen: boolean;
}

export const CartContainer = styled.div<CartContainerProps>`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 370px;
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

export const ProductCard = styled.li`
  width: 344px;
  height: 100px;
  background-color: ${colors.rosaClaro};
  margin: 9px;
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-top: 30px;
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