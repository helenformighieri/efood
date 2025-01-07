import styled from "styled-components";

interface CartContainerProps {
  isOpen: boolean;
}

export const CartContainer = styled.div<CartContainerProps>`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 360px;
  height: 100%;
  background-color: #fff;
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
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

export const ProductImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 10px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TotalContainer = styled.div`
  padding: 10px;
  border-top: 1px solid #ccc;
  text-align: right;
  font-size: 18px;
  font-weight: bold;
`;