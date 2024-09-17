import React from "react";
import { ModalOverlay, ModalContent, CloseButton, ModalContainer, ModalImg, ModalInformation, ModalTitle, ModalDescription, ModalButton } from './style.ts';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;  // Trocar para string já que agora passará como HTML
  img: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, description, img }) => {
  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContent>
        <CloseButton onClick={onClose}>x</CloseButton>
        <ModalContainer>
          <ModalImg src={img} alt={title} />
          <ModalInformation>
            <ModalTitle>{title}</ModalTitle>
            {/* Usar dangerouslySetInnerHTML para renderizar HTML */}
            <ModalDescription dangerouslySetInnerHTML={{ __html: description }} />
            <ModalButton>Adicionar ao carrinho - R$ 60,90</ModalButton>
          </ModalInformation>
        </ModalContainer>
      </ModalContent>
    </ModalOverlay>
  );
};
