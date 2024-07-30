import React from "react";
import { Imagem, Titulo } from "./style.ts";

import bannerImg from "../../assets/images/banner.png";

import logo from "../../assets/images/logo.png";
import { Logo } from "../../styles.ts";

const Banner = () => {
  return (
    <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
      <Logo src={logo} alt="Logo" />
      <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
    </Imagem>
  );
};

export default Banner;
