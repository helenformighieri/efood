import React from "react";
import { Imagem, Logo, Titulo } from "./style.ts";

import bannerImg from "../../assets/images/banner.png";

import logo from "../../assets/images/logo.png"

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <Logo src={logo} alt="Logo" />
    <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
  </Imagem>
);

export default Banner;
