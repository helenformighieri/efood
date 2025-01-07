import React, { useState } from "react";
import { Cart } from "../Cart/index.tsx";
import { Header, Imagem, ImagemWrapper, Links } from "./style.ts";
import { Logo } from "../../styles.ts";
import bannerImg from "../../assets/images/banner.png";
import logo from "../../assets/images/logo.png";

interface HeaderComponentProps {
  cartItems: Product[];
  onAddToCart: (product: Product) => void;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ cartItems, onAddToCart }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <Header>
      <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
        <ImagemWrapper>
          <Links href="/">Restaurantes</Links>
          <Logo src={logo} alt="Logo" />
          <Links as="button" className="button" onClick={() => setIsCartOpen(true)}>
            {cartItems.length} produto(s) no carrinho
          </Links>
          <Cart
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            cartItems={cartItems}
            onAddToCart={onAddToCart}
          />
        </ImagemWrapper>
      </Imagem>
    </Header>
  );
};

export default HeaderComponent;