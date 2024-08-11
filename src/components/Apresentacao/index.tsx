import React from "react";

import fundoApresentacao from "../../assets/images/massa.png";
import { Imagem, TitleNameRestaurant, TitleType } from "./style.ts";

const Apresentacao = () => {
  return (
      <Imagem style={{ backgroundImage: `url(${fundoApresentacao})` }}>
        <TitleType>Italiana</TitleType>
        <TitleNameRestaurant>La Dolce Vita Trattoria</TitleNameRestaurant>
      </Imagem>
  );
};

export default Apresentacao;
