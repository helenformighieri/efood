import React from "react";
import { CartContainer, Overlay, ProductCard, ProductImage, ProductInfo, TotalContainer } from "./style.ts";

interface Product {
  id: number;
  nome: string;
  preco: number;
  foto: string;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: Product[];
  onAddToCart: (product: Product) => void;
}

export const Cart: React.FC<CartProps> = ({ isOpen, onClose, cartItems }) => {
  const total = cartItems.reduce((sum, item) => sum + item.preco, 0);

  return (
    <>
      <Overlay isOpen={isOpen} onClick={onClose} />
      <CartContainer isOpen={isOpen}>
        {cartItems.length === 0 ? (
          <p>Seu carrinho está vazio</p>
        ) : (
          <>
            <ul>
              {cartItems.map((item) => (
                <ProductCard key={item.id}>
                  <ProductImage src={item.foto} alt={item.nome} />
                  <ProductInfo>
                    <h3>{item.nome}</h3>
                    <p>R$ {item.preco.toFixed(2)}</p>
                  </ProductInfo>
                </ProductCard>
              ))}
            </ul>
            <TotalContainer>
              <h3>Total: R$ {total.toFixed(2)}</h3>
            </TotalContainer>
          </>
        )}
      </CartContainer>
    </>
  );
};