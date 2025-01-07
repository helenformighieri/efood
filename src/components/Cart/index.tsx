import React from "react";
import { CartContainer, Overlay, ProductCard, ProductImage, ProductInfo, ProductTitle, ProductPrice, TotalContainer, RemoveButton, ContinueButton, AvisoCarrinhoVazio } from "./style.ts";
import lixeira from "../../assets/images/lixeira.png";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { removeFromCart } from '../../slices/cartSlice.ts';


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
}

export const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.preco * item.quantidade, 0);

  return (
    <>
      <Overlay isOpen={isOpen} onClick={onClose} />
      <CartContainer isOpen={isOpen}>
        {cartItems.length === 0 ? (
          <AvisoCarrinhoVazio>Seu carrinho está vazio</AvisoCarrinhoVazio>
        ) : (
          <>
            {cartItems.map((item) => (
              <ProductCard key={item.id}>
                <ProductImage src={item.foto} alt={item.nome} />
                <ProductInfo>
                  <ProductTitle>{item.nome}</ProductTitle>
                  <ProductPrice>R$ {item.preco.toFixed(2)} x {item.quantidade}</ProductPrice>
                </ProductInfo>
                <RemoveButton onClick={() => dispatch(removeFromCart(item.id))}>
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
        <ContinueButton onClick={() => setIsEntregaOpen(true)}>
          Continuar com a entrega
        </ContinueButton>
      </CartContainer>
    </>
  );
};