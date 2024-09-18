import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/index.tsx';
import Header from '../../components/Header/index.tsx';
import { ContainerProdutos, CardProduto, CardImg, CardTitle, CardDescription, CardButton } from '../../components/Produtos/style.ts';
import { Modal } from '../../components/Modal/index.tsx';

interface Product {
  id: number;
  nome: string;
  descricao: string;
  foto: string;
  preco: number;
  porcao: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes');
        if (!response.ok) {
          throw new Error('Erro ao buscar produtos');
        }
        const data = await response.json();
        const allProducts = data.flatMap((restaurant: any) => restaurant.cardapio);
        setProducts(allProducts);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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
      <ContainerProdutos>
        {products.map(product => (
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