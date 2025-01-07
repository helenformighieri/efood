import React from "react";
import { CartContainer, Overlay, ProductCard, ProductImage, ProductInfo, ProductTitle, ProductPrice, TotalContainer, RemoveButton } from "./style.ts";
import lixeira from "../../assets/images/lixeira.png";


export interface Product {
  id: number;
  nome: string;
  descricao: string;
  foto: string;
  preco: number;
  porcao: string;
  quantidade: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: Product[];
  totalPrice: number;
  onAddToCart: (product: Product) => void;
  onRemoveFromCart: (productId: number) => void;
}

export const Cart: React.FC<CartProps> = ({ isOpen, onClose, cartItems, onAddToCart, onRemoveFromCart }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.preco * item.quantidade, 0);

  return (
    <>
      <Overlay isOpen={isOpen} onClick={onClose} />
      <CartContainer isOpen={isOpen}>
        {cartItems.length === 0 ? (
          <p>Seu carrinho está vazio</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <ProductCard key={item.id}>
                <ProductImage src={item.foto} alt={item.nome} />
                <ProductInfo>
                  <ProductTitle>{item.nome}</ProductTitle>
                  <ProductPrice>R$ {item.preco.toFixed(2)} x {item.quantidade}</ProductPrice>
                </ProductInfo>
                <RemoveButton onClick={() => onRemoveFromCart(item.id)}>
                  <img src={lixeira} alt="Remover" />
                </RemoveButton>
              </ProductCard>
            ))}
            <TotalContainer>
              <p>Valor total</p>
              <p>Total: R$ {totalPrice.toFixed(2)}</p>
            </TotalContainer>
          </>
        )}
      </CartContainer>
    </>
  );
};