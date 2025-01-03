import React, { useState, useEffect } from "react";
import {
  Card,
  CardButtonLink,
  CardContainer,
  CardDescription,
  CardImg,
  CardTitle,
} from "./style.ts";
import { TagContainer } from "../Tag/style.ts";
import star from "../../assets/images/star.png";

interface Restaurant {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
}

const Listagem = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes');
        if (!response.ok) {
          throw new Error('Erro ao buscar restaurantes');
        }
        const data = await response.json();
        setRestaurants(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  if (loading) {
    return <p>Carregando restaurantes...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <Card>
      {restaurants.map((restaurant) => (
        <CardContainer key={restaurant.id}>
          {restaurant.destacado && <TagContainer id="destaque">Destaque do dia</TagContainer>}
          <TagContainer>{restaurant.tipo}</TagContainer>
          <CardImg src={restaurant.capa} alt={restaurant.titulo} />
          <CardTitle>
            <h3>{restaurant.titulo}</h3>
            <h3>
              {restaurant.avaliacao} <img src={star} alt="estrela amarela" />
            </h3>
          </CardTitle>
          <CardDescription>{restaurant.descricao}</CardDescription>
          <CardButtonLink to={`/Products/${restaurant.id}`}>Saiba Mais</CardButtonLink>
        </CardContainer>
      ))}
    </Card>
  );
};

export default Listagem;