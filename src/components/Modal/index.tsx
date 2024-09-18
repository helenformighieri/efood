import React, { useEffect } from "react";
import { ModalOverlay, ModalContent, CloseButton, ModalContainer, ModalImg, ModalInformation, ModalTitle, ModalDescription, ModalButton } from './style.ts';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  img: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, description, img }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContent>
        <CloseButton onClick={onClose}>x</CloseButton>
        <ModalContainer>
          <ModalImg src={img} alt={title} />
          <ModalInformation>
            <ModalTitle>{title}</ModalTitle>
            <ModalDescription>{description}</ModalDescription>
            <ModalButton>Adicionar ao carrinho - R$ 60,90</ModalButton>
          </ModalInformation>
        </ModalContainer>
      </ModalContent>
    </ModalOverlay>
  );
};