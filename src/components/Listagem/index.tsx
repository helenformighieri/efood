import React from "react";
import {
  Card,
  CardButtonLink,
  CardContainer,
  CardDescription,
  CardImg,
  CardTitle,
} from "./style.ts";
import sushiImg from "../../assets/images/sushi.png";
import massaImg from "../../assets/images/massa.png";
import starImg from "../../assets/images/star.png";
import { TagContainer } from "../Tag/style.ts";

const Listagem = () => {
  return (
    <Card>
      <CardContainer>
        <TagContainer id="destaque">Destaque do dia</TagContainer>
        <TagContainer>Japonesa</TagContainer>
        <CardImg src={sushiImg} alt="Sushi" />
        <CardTitle>
          <h3>Hioki Sushi</h3>
          <h3>
            4.9 <img src={starImg} alt="estrela amarela" />
          </h3>
        </CardTitle>
        <CardDescription>
          Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
          frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
          rápida, embalagens cuidadosas e qualidade garantida. Experimente o
          Japão sem sair do lar com nosso delivery!
        </CardDescription>
        <CardButtonLink type="link" to="/Products">Saiba Mais</CardButtonLink>
      </CardContainer>
      <CardContainer>
        <TagContainer>Italiana</TagContainer>
        <CardImg src={massaImg} alt="pizza" />
        <CardTitle>
          <h3>La Dolce Vita Trattoria</h3>
          <h3>
            4.6 <img src={starImg} alt="estrela amarela" />
          </h3>
        </CardTitle>
        <CardDescription>
          A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
          Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
          tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e
          sabor inesquecível. Peça já!
        </CardDescription>
        <CardButtonLink type="link" to="/produto">Saiba Mais</CardButtonLink>
      </CardContainer>
      <CardContainer>
        <TagContainer>Italiana</TagContainer>
        <CardImg src={massaImg} alt="pizza" />
        <CardTitle>
          <h3>La Dolce Vita Trattoria</h3>
          <h3>
            4.6 <img src={starImg} alt="estrela amarela" />
          </h3>
        </CardTitle>
        <CardDescription>
          A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
          Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
          tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e
          sabor inesquecível. Peça já!
        </CardDescription>
        <CardButtonLink type="link" to="/Products">Saiba Mais</CardButtonLink>
      </CardContainer>
      <CardContainer>
        <TagContainer>Italiana</TagContainer>
        <CardImg src={massaImg} alt="pizza" />
        <CardTitle>
          <h3>La Dolce Vita Trattoria</h3>
          <h3>
            4.6 <img src={starImg} alt="estrela amarela" />
          </h3>
        </CardTitle>
        <CardDescription>
          A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
          Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
          tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e
          sabor inesquecível. Peça já!
        </CardDescription>
        <CardButtonLink type="link" to="/produto">Saiba Mais</CardButtonLink>
      </CardContainer>
      <CardContainer>
        <TagContainer>Italiana</TagContainer>
        <CardImg src={massaImg} alt="pizza" />
        <CardTitle>
          <h3>La Dolce Vita Trattoria</h3>
          <h3>
            4.6 <img src={starImg} alt="estrela amarela" />
          </h3>
        </CardTitle>
        <CardDescription>
          A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
          Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
          tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e
          sabor inesquecível. Peça já!
        </CardDescription>
        <CardButtonLink type="link" to="/produto">Saiba Mais</CardButtonLink>
      </CardContainer>
      <CardContainer>
        <TagContainer>Italiana</TagContainer>
        <CardImg src={massaImg} alt="pizza" />
        <CardTitle>
          <h3>La Dolce Vita Trattoria</h3>
          <h3>
            4.6 <img src={starImg} alt="estrela amarela" />
          </h3>
        </CardTitle>
        <CardDescription>
          A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
          Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
          tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e
          sabor inesquecível. Peça já!
        </CardDescription>
        <CardButtonLink type="link" to="/produto">Saiba Mais</CardButtonLink>
      </CardContainer>
    </Card>
  );
};

export default Listagem;
