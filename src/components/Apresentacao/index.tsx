import React from "react";
import { Imagem, TitleNameRestaurant, TitleType, Container } from "./style.ts";

interface ApresentacaoProps {
  restaurant: {
    titulo: string;
    tipo: string;
    capa: string;
  };
}

const Apresentacao: React.FC<ApresentacaoProps> = ({ restaurant }) => {
  return (
    <Imagem style={{ backgroundImage: `url(${restaurant.capa})` }}>
      <Container>
        <TitleType>{restaurant.tipo}</TitleType>
        <TitleNameRestaurant>{restaurant.titulo}</TitleNameRestaurant>
      </Container>
    </Imagem>
  );
};

export default Apresentacao;