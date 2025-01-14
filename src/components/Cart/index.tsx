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
  const [isPayment, setIsPayment] = useState(false);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [deliveryInfo, setDeliveryInfo] = useState({
    receiver: '',
    address: '',
    city: '',
    zipCode: '',
    number: '',
    complement: '',
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardName: '',
    cardNumber: '',
    cvv: '',
    expiryMonth: '',
    expiryYear: '',
  });
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);

  const handleContinueToDelivery = () => {
    setIsDelivery(true);
  };

  const handleBackToCart = () => {
    setIsDelivery(false);
  };

  const handleContinueToPayment = () => {
    setIsPayment(true);
  };

  const handleBackToDelivery = () => {
    setIsPayment(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (isPayment) {
      setPaymentInfo({ ...paymentInfo, [name]: value });
    } else {
      setDeliveryInfo({ ...deliveryInfo, [name]: value });
    }
  };

  const handleCheckout = () => {
    dispatch(checkout({ products: cartItems, delivery: deliveryInfo, payment: paymentInfo }));
    setOrderId(`ORDER_${Math.floor(Math.random() * 1000000)}`);
    setIsOrderConfirmed(true);
  };

  const handleCompleteOrder = () => {
    setIsOrderConfirmed(false);
    setIsOrderCompleted(true);
    setTimeout(() => {
      setIsOrderCompleted(false);
      onClose();
    }, 3000);
  };

  return (
    <>
      <Overlay isOpen={isOpen} onClick={onClose} />
      <CartContainer isOpen={isOpen}>
        {isOrderCompleted ? (
          <DeliveryContainer>
            <ModalTitle>Pedido realizado com sucesso! ⭐</ModalTitle>
          </DeliveryContainer>
        ) : isOrderConfirmed ? (
          <DeliveryContainer>
            <ModalTitle>Pedido realizado - {orderId}</ModalTitle>
            <p>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</p>
            <p>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.</p>
            <p>Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.</p>
            <p>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</p>
            <ButtonContainer>
              <ContinueButton onClick={handleCompleteOrder}>Concluir</ContinueButton>
            </ButtonContainer>
          </DeliveryContainer>
        ) : isPayment ? (
          <DeliveryContainer>
            <ModalTitle>Pagamento</ModalTitle>
            <Label>Nome no cartão</Label>
            <Input name="cardName" value={paymentInfo.cardName} onChange={handleChange} />
            <RowContainer>
              <div>
                <Label>Número do cartão</Label>
                <Input name="cardNumber" value={paymentInfo.cardNumber} onChange={handleChange} />
              </div>
              <div>
                <Label>CVV</Label>
                <Input name="cvv" value={paymentInfo.cvv} onChange={handleChange} />
              </div>
            </RowContainer>
            <RowContainer>
              <div>
                <Label>Mês de vencimento</Label>
                <Input name="expiryMonth" value={paymentInfo.expiryMonth} onChange={handleChange} />
              </div>
              <div>
                <Label>Ano de vencimento</Label>
                <Input name="expiryYear" value={paymentInfo.expiryYear} onChange={handleChange} />
              </div>
            </RowContainer>
            <ButtonContainer>
              <ContinueButton onClick={handleCheckout}>Finalizar pagamento</ContinueButton>
              <ContinueButton onClick={handleBackToDelivery}>Voltar para a entrega</ContinueButton>
            </ButtonContainer>
          </DeliveryContainer>
        ) : isDelivery ? (
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
              <ContinueButton onClick={handleContinueToPayment}>Continuar com o pagamento</ContinueButton>
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
            {cartItems.length > 0 && (
              <ContinueButton onClick={handleContinueToDelivery}>
                Continuar com a entrega
              </ContinueButton>
            )}
          </>
        )}
      </CartContainer>
    </>
  );
};

export default Cart;