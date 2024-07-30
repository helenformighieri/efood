import React from "react";
import { ContainerFooter, ContainerP, RedesSociais, RedesSociaisItem } from "./style.ts";
import logo from "../../assets/images/logo.png";
import instagram from "../../assets/images/logosRedes/instagram.png";
import facebook from "../../assets/images/logosRedes/facebook.png";
import twitter from "../../assets/images/logosRedes/twitter.png";
import { Logo } from "../../styles.ts";

const Footer = () => {
  return (
    <ContainerFooter>
      <Logo src={logo} alt="Logo" />
      <RedesSociais>
        <RedesSociaisItem>
          <img src={instagram} alt="Instagram" />
        </RedesSociaisItem>
        <RedesSociaisItem>
          <img src={facebook} alt="Facebook" />
        </RedesSociaisItem>
        <RedesSociaisItem>
          <img src={twitter} alt="Twitter" />
        </RedesSociaisItem>
      </RedesSociais>
      <ContainerP>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </ContainerP>
    </ContainerFooter>
  );
};

export default Footer;
