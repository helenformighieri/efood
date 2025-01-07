import React, { useState } from "react";
import { Cart } from "../Cart/index.tsx";
import { Header, Imagem, ImagemWrapper, Links } from "./style.ts";
import { Logo } from "../../styles.ts";
import bannerImg from "../../assets/images/banner.png";
import logo from "../../assets/images/logo.png";
import { Product } from "../../components/Cart/index.tsx"; 

interface HeaderComponentProps {
  cartItems: Product[];
  totalItems: number;
  totalPrice: number;
  onAddToCart: (product: Product) => void;
  onRemoveFromCart: (productId: number) => void;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ cartItems, totalItems, totalPrice, onAddToCart, onRemoveFromCart }) => { 
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <Header>
      <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
        <ImagemWrapper>
          <Links href="/">Restaurantes</Links>
          <Logo src={logo} alt="Logo" />
          <Links as="button" className="button" onClick={() => setIsCartOpen(true)}>
            {totalItems} produto(s) no carrinho 
          </Links>
          <Cart
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            cartItems={cartItems}
            onAddToCart={onAddToCart}
            onRemoveFromCart={onRemoveFromCart} 
          />
        </ImagemWrapper>
      </Imagem>
    </Header>
  );
};

export default HeaderComponent;