import styled from 'styled-components';
import { colors } from "../../styles.ts";

interface ModalOverlayProps {
  isOpen: boolean;
}

export const ModalOverlay = styled.div<ModalOverlayProps>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7); 
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  width: 1120px;
  height: 344px;
  background-color: ${colors.pink};
  position: relative;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const CloseButton = styled.button`
  color: ${colors.branco};
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

export const ModalImg = styled.img`
  width: 280px;
  height: 280px;
  margin: 10px 10px 10px 0; 
  object-fit: cover;
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;  /* Alinha o conteúdo ao topo */
  height: 100%;
  padding: 0 20px;
`;

export const ModalInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  align-items: flex-start;
  margin-left: 20px;
`;

export const ModalTitle = styled.h2`
  color: ${colors.branco};
  font-size: 24px;
  margin: 10px 0;
`;

export const ModalDescription = styled.p`
  color: ${colors.branco};
  font-size: 16px;
  margin: 10px 0;
`;

export const ModalButton = styled.button`
  background-color: ${colors.branco};
  color: ${colors.pink};
  padding: 5px 5px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
`;
