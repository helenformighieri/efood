import React from "react";
import fundoApresentacao from "../../assets/images/massa.png";
import { Imagem, TitleNameRestaurant, TitleType, Container } from "./style.ts";

const Apresentacao = () => {
  return (
    <Imagem style={{ backgroundImage: `url(${fundoApresentacao})` }}>
      <Container>
        <TitleType>Italiana</TitleType>
        <TitleNameRestaurant>La Dolce Vita Trattoria</TitleNameRestaurant>
      </Container>
    </Imagem>
  );
};

export default Apresentacao;
