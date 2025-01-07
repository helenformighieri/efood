import React, { useState } from "react";
import { Cart } from "../Cart/index.tsx";
import { Header, Imagem, ImagemWrapper, Links } from "./style.ts";
import { Logo } from "../../styles.ts";
import bannerImg from "../../assets/images/banner.png";
import logo from "../../assets/images/logo.png";
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const HeaderComponent: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantidade, 0);

  return (
    <Header>
      <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
        <ImagemWrapper>
          <Links href="/">Restaurantes</Links>
          <Logo src={logo} alt="Logo" />
          <Links href="#" onClick={(event) => {
            event.preventDefault();
            setIsCartOpen(true);
          }}>
            {totalItems} produto(s) no carrinho
          </Links>
          <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </ImagemWrapper>
      </Imagem>
    </Header>
  );
};

export default HeaderComponent;