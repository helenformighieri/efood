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
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
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
  const [orderResponse, setOrderResponse] = useState<any>(null);

  const validateDelivery = () => {
    const newErrors: { [key: string]: string } = {};
    if (!deliveryInfo.receiver.match(/^[A-Za-zÀ-ú\s]+$/)) {
      newErrors.receiver = "Use apenas letras.";
    }
    if (!deliveryInfo.city.match(/^[A-Za-zÀ-ú\s]+$/)) {
      newErrors.city = "Use apenas letras.";
    }
    if (!deliveryInfo.address.match(/^[A-Za-zÀ-ú\s]+$/)) {
      newErrors.address = "Use apenas letras.";
    }
    if (!deliveryInfo.zipCode.match(/^\d{1,9}$/)) {
      newErrors.zipCode = "Use até 9 números.";
    }
    if (deliveryInfo.number && !deliveryInfo.number.match(/^\d+$/)) {
      newErrors.number = "Use apenas números.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePayment = () => {
    const newErrors: { [key: string]: string } = {};
    if (!paymentInfo.cardName.match(/^[A-Za-zÀ-ú\s]+$/)) {
      newErrors.cardName = "Use apenas letras.";
    }
    if (!paymentInfo.cardNumber.match(/^\d{16}$/)) {
      newErrors.cardNumber = "Use 16 números.";
    }
    if (!paymentInfo.cvv.match(/^\d{3,4}$/)) {
      newErrors.cvv = "Use 3 ou 4 números.";
    }
    if (!paymentInfo.expiryMonth.match(/^\d{1,2}$/) || parseInt(paymentInfo.expiryMonth) < 1 || parseInt(paymentInfo.expiryMonth) > 12) {
      newErrors.expiryMonth = "Use um mês válido (1-12).";
    }
    if (!paymentInfo.expiryYear.match(/^\d{4}$/)) {
      newErrors.expiryYear = "Use 4 números.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinueToDelivery = () => {
    setIsDelivery(true);
  };

  const handleBackToCart = () => {
    setIsDelivery(false);
  };

  const handleContinueToPayment = () => {
    if (validateDelivery()) {
      setIsPayment(true);
    } else {
      setErrors(prevErrors => ({ ...prevErrors, form: "Preencha todos os campos corretamente para prosseguir." }));
    }
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

  const handleCheckout = async () => {
    if (!validatePayment()) {
      setErrors(prevErrors => ({ ...prevErrors, form: "Preencha todos os campos corretamente para prosseguir." }));
      return;
    }

    const orderData = {
      products: cartItems.map(item => ({ id: item.id, price: item.preco })),
      delivery: {
        receiver: deliveryInfo.receiver,
        address: {
          description: deliveryInfo.address,
          city: deliveryInfo.city,
          zipCode: deliveryInfo.zipCode,
          number: parseInt(deliveryInfo.number),
          complement: deliveryInfo.complement,
        },
      },
      payment: {
        card: {
          name: paymentInfo.cardName,
          number: paymentInfo.cardNumber,
          code: parseInt(paymentInfo.cvv),
          expires: {
            month: parseInt(paymentInfo.expiryMonth),
            year: parseInt(paymentInfo.expiryYear),
          },
        },
      },
    };

    try {
      const response = await fetch('https://fake-api-tau.vercel.app/api/efood/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();
      setOrderResponse(data);
      setOrderId(`ORDER_${Math.floor(Math.random() * 1000000)}`);
      setIsOrderConfirmed(true);
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  const handleCompleteOrder = () => {
    setIsOrderConfirmed(false);
    setIsOrderCompleted(true);
    setDeliveryInfo({
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
    });
    setPaymentInfo({
      cardName: '',
      cardNumber: '',
      cvv: '',
      expiryMonth: '',
      expiryYear: '',
    });
    setIsDelivery(false);
    setIsPayment(false);
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
            {errors.cardName && <p>{errors.cardName}</p>}
            <RowContainer>
              <div>
                <Label>Número do cartão</Label>
                <Input name="cardNumber" value={paymentInfo.cardNumber} onChange={handleChange} />
                {errors.cardNumber && <p>{errors.cardNumber}</p>}
              </div>
              <div>
                <Label>CVV</Label>
                <Input name="cvv" value={paymentInfo.cvv} onChange={handleChange} />
                {errors.cvv && <p>{errors.cvv}</p>}
              </div>
            </RowContainer>
            <RowContainer>
              <div>
                <Label>Mês de vencimento</Label>
                <Input name="expiryMonth" value={paymentInfo.expiryMonth} onChange={handleChange} />
                {errors.expiryMonth && <p>{errors.expiryMonth}</p>}
              </div>
              <div>
                <Label>Ano de vencimento</Label>
                <Input name="expiryYear" value={paymentInfo.expiryYear} onChange={handleChange} />
                {errors.expiryYear && <p>{errors.expiryYear}</p>}
              </div>
            </RowContainer>
            {errors.form && <p>{errors.form}</p>}
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
            {errors.receiver && <p>{errors.receiver}</p>}
            <Label>Endereço</Label>
            <Input name="address" value={deliveryInfo.address} onChange={handleChange} />
            {errors.address && <p>{errors.address}</p>}
            <Label>Cidade</Label>
            <Input name="city" value={deliveryInfo.city} onChange={handleChange} />
            {errors.city && <p>{errors.city}</p>}
            <RowContainer>
              <div>
                <Label>CEP</Label>
                <Input name="zipCode" value={deliveryInfo.zipCode} onChange={handleChange} />
                {errors.zipCode && <p>{errors.zipCode}</p>}
              </div>
              <div>
                <Label>Número</Label>
                <Input name="number" value={deliveryInfo.number} onChange={handleChange} />
                {errors.number && <p>{errors.number}</p>}
              </div>
            </RowContainer>
            <Label>Complemento (opcional)</Label>
            <Input name="complement" value={deliveryInfo.complement} onChange={handleChange} />
            {errors.form && <p>{errors.form}</p>}
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