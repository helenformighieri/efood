import React from "react";
import { Header, Imagem, ImagemWrapper } from "./style.ts";
import { Logo } from "../../styles.ts";

import bannerImg from "../../assets/images/banner.png";
import logo from "../../assets/images/logo.png";

const HeaderComponent = () => {
  return (
    <Header>
      <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
        <ImagemWrapper>
          <p>Restaurantes</p>
          <Logo src={logo} alt="Logo" />
          <p>0 produto(s) no carrinho</p>
        </ImagemWrapper>
      </Imagem>
    </Header>
  );
};

export default HeaderComponent;
