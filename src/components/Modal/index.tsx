import React, { useEffect } from "react";
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  ModalContainer,
  ModalImg,
  ModalInformation,
  ModalTitle,
  ModalDescription,
  ModalButton
} from './style.ts';



interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  img: string;
  price: number;
  onAddToCart: () => void;
  openCart: () => void;
}


export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  img,
  price,
  onAddToCart,
  openCart
}) => {
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

  const handleAddToCart = () => {
    onAddToCart();
    openCart();
  };

  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContent>
        <CloseButton onClick={onClose}>x</CloseButton>
        <ModalContainer>
          <ModalImg src={img} alt={title} />
          <ModalInformation>
            <ModalTitle>{title}</ModalTitle>
            <ModalDescription>{description}</ModalDescription>
            <ModalButton onClick={handleAddToCart}>
              Adicionar ao carrinho - R$ {price.toFixed(2)}
            </ModalButton>
          </ModalInformation>
        </ModalContainer>
      </ModalContent>
    </ModalOverlay>
  );
};