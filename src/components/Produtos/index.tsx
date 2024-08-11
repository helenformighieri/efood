import React from "react";
import { CardButton, CardDescription, CardImg, CardProduto, CardTitle, ContainerProdutos } from "./style.ts";

import pizzaImg from "../../assets/images/pizza.png";

const Produtos = () => {
  return (
    <ContainerProdutos>
      <CardProduto>
        <CardImg src={pizzaImg} alt="uma pizza marguerita" />
        <CardTitle>Pizza Marguerita</CardTitle>
        <CardDescription>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</CardDescription>
        <CardButton>Adicionar ao carrinho</CardButton>
      </CardProduto>
      <CardProduto>
        <CardImg src={pizzaImg} alt="uma pizza marguerita" />
        <CardTitle>Pizza Marguerita</CardTitle>
        <CardDescription>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</CardDescription>
        <CardButton>Adicionar ao carrinho</CardButton>
      </CardProduto>
      <CardProduto>
        <CardImg src={pizzaImg} alt="uma pizza marguerita" />
        <CardTitle>Pizza Marguerita</CardTitle>
        <CardDescription>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</CardDescription>
        <CardButton>Adicionar ao carrinho</CardButton>
      </CardProduto>
      <CardProduto>
        <CardImg src={pizzaImg} alt="uma pizza marguerita" />
        <CardTitle>Pizza Marguerita</CardTitle>
        <CardDescription>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</CardDescription>
        <CardButton>Adicionar ao carrinho</CardButton>
      </CardProduto>
      <CardProduto>
        <CardImg src={pizzaImg} alt="uma pizza marguerita" />
        <CardTitle>Pizza Marguerita</CardTitle>
        <CardDescription>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</CardDescription>
        <CardButton>Adicionar ao carrinho</CardButton>
      </CardProduto>
      <CardProduto>
        <CardImg src={pizzaImg} alt="uma pizza marguerita" />
        <CardTitle>Pizza Marguerita</CardTitle>
        <CardDescription>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</CardDescription>
        <CardButton>Adicionar ao carrinho</CardButton>
      </CardProduto>
    </ContainerProdutos>
  );
};

export default Produtos;