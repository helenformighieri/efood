import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/index.tsx';
import Header from '../../components/Header/index.tsx';
import { ContainerProdutos, CardProduto, CardImg, CardTitle, CardDescription, CardButton } from './style.ts';
import { Modal } from '../../components/Modal/index.tsx';
import Apresentacao from '../../components/Apresentacao/index.tsx';
import { useParams } from 'react-router-dom';

interface Product {
  id: number;
  nome: string;
  descricao: string;
  foto: string;
  preco: number;
  porcao: string;
}

interface Restaurant {
  id: number;
  titulo: string;
  tipo: string;
  capa: string;
  cardapio: Product[];
}

const Products = () => {
  const { id } = useParams<{ id: string }>();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`);
        if (!response.ok) {
          throw new Error('Erro ao buscar restaurante');
        }
        const data = await response.json();
        setRestaurant(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRestaurant();
  }, [id]);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  if (loading) {
    return <p>Carregando produtos...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <>
      <Header />
      {restaurant && <Apresentacao restaurant={restaurant} />}
      <ContainerProdutos>
        {restaurant?.cardapio.map(product => (
          <CardProduto key={product.id}>
            <CardImg src={product.foto} alt={product.nome} />
            <CardTitle>{product.nome}</CardTitle>
            <CardDescription>{product.descricao}</CardDescription>
            <CardButton onClick={() => openModal(product)}>Comprar</CardButton>
          </CardProduto>
        ))}
        {selectedProduct && (
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            title={selectedProduct.nome}
            description={selectedProduct.descricao}
            img={selectedProduct.foto}
          />
        )}
      </ContainerProdutos>
      <Footer />
    </>
  );
};

export default Products;