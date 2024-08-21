import React from "react";

import fundoApresentacao from "../../assets/images/massa.png";
import { ContainerTitles, Imagem, TitleNameRestaurant, TitleType } from "./style.ts";

const Apresentacao = () => {
  return (
    <Imagem style={{ backgroundImage: `url(${fundoApresentacao})` }}>
      <ContainerTitles>
        <TitleType>Italiana</TitleType>
        <TitleNameRestaurant>La Dolce Vita Trattoria</TitleNameRestaurant>
      </ContainerTitles>
    </Imagem>
  );
};

export default Apresentacao;
