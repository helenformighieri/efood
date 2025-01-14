import React, { useState } from "react";
import { CartContainer, Overlay, ProductCard, ProductImage, ProductInfo, ProductTitle, ProductPrice, TotalContainer, RemoveButton, ContinueButton, AvisoCarrinhoVazio, Input, ButtonContainer, ModalTitle, Label, RowContainer, DeliveryContainer } from "./style.ts";
import lixeira from "../../assets/images/lixeira.png";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { removeFromCart, checkout } from '../../slices/cartSlice.ts';

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

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.preco * item.quantidade, 0);
  const [isDelivery, setIsDelivery] = useState(false);
  const [deliveryInfo, setDeliveryInfo] = useState({
    receiver: '',
    address: '',
    city: '',
    zipCode: '',
    number: '',
    complement: '',
  });

  const handleContinueToDelivery = () => {
    setIsDelivery(true);
  };

  const handleBackToCart = () => {
    setIsDelivery(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDeliveryInfo({ ...deliveryInfo, [name]: value });
  };

  const handleCheckout = () => {
    dispatch(checkout({ products: cartItems, delivery: deliveryInfo }));
    onClose();
  };

  return (
    <>
      <Overlay isOpen={isOpen} onClick={onClose} />
      <CartContainer isOpen={isOpen}>
        {isDelivery ? (
          <DeliveryContainer>
            <ModalTitle>Entrega</ModalTitle>
            <Label>Nome do recebedor</Label>
            <Input name="receiver" value={deliveryInfo.receiver} onChange={handleChange} />
            <Label>Endereço</Label>
            <Input name="address" value={deliveryInfo.address} onChange={handleChange} />
            <Label>Cidade</Label>
            <Input name="city" value={deliveryInfo.city} onChange={handleChange} />
            <RowContainer>
              <div>
                <Label>CEP</Label>
                <Input name="zipCode" value={deliveryInfo.zipCode} onChange={handleChange} />
              </div>
              <div>
                <Label>Número</Label>
                <Input name="number" value={deliveryInfo.number} onChange={handleChange} />
              </div>
            </RowContainer>
            <Label>Complemento (opcional)</Label>
            <Input name="complement" value={deliveryInfo.complement} onChange={handleChange} />
            <ButtonContainer>
              <ContinueButton onClick={handleCheckout}>Continuar com o pagamento</ContinueButton>
              <ContinueButton onClick={handleBackToCart}>Voltar para o carrinho</ContinueButton>
            </ButtonContainer>
          </DeliveryContainer>
        ) : (
          <>
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
            <ContinueButton onClick={handleContinueToDelivery} disabled={cartItems.length === 0}>
              Continuar com a entrega
            </ContinueButton>
          </>
        )}
      </CartContainer>
    </>
  );
};

export default Cart;