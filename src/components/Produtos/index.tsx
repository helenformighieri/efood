import React, { useState, useEffect } from "react";
import { ContainerProdutos, CardProduto, CardImg, CardTitle, CardDescription, CardButton } from "../Produtos/style.ts";
import { Modal } from "../Modal/index.tsx";

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

const Produtos: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
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
        const data: Restaurant[] = await response.json();
        const allProducts = data.flatMap(restaurant => restaurant.cardapio);
        setProducts(allProducts);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  if (loading) {
    return <p>Carregando produtos...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <ContainerProdutos>
      {products.map((product) => (
        <CardProduto key={product.id}>
          <CardImg src={product.foto} alt={product.nome} />
          <CardTitle>{product.nome}</CardTitle>
          <CardDescription>{product.descricao}</CardDescription>
          <CardButton onClick={() => handleProductClick(product)}>Saiba mais</CardButton>
        </CardProduto>
      ))}

      {selectedProduct && (
        <Modal
          isOpen={!!selectedProduct}
          onClose={closeModal}
          title={selectedProduct.nome}
          description={selectedProduct.descricao}
          img={selectedProduct.foto}
        />
      )}
    </ContainerProdutos>
  );
};

export default Produtos;