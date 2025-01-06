import React from "react";
import { Header, Imagem, ImagemWrapper, Links } from "./style.ts";
import { Logo } from "../../styles.ts";

import bannerImg from "../../assets/images/banner.png";
import logo from "../../assets/images/logo.png";

const HeaderComponent = () => {
  return (
    <Header>
      <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
        <ImagemWrapper>
          <Links href="/">Restaurantes</Links>
          <Logo src={logo} alt="Logo" />
          <Links href="">0 produto(s) no carrinho</Links>
        </ImagemWrapper>
      </Imagem>
    </Header>
  );
};

export default HeaderComponent;