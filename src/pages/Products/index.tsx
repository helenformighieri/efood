import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/index.tsx';
import Header from '../../components/Header/index.tsx';
import { ContainerProdutos, CardProduto, CardImg, CardTitle, CardDescription, CardButton } from './style.ts';
import { Modal } from '../../components/Modal/index.tsx';
import { useParams } from 'react-router-dom';
import { Cart } from '../../components/Cart/index.tsx';
import { Product } from '../../components/Cart/index.tsx';

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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

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

  const handleAddToCart = (product: Product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantidade: item.quantidade + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantidade: 1 }]);
    }
  };

  const handleRemoveFromCart = (productId: number) => {
    const existingProduct = cartItems.find(item => item.id === productId);
    if (existingProduct && existingProduct.quantidade > 1) {
      setCartItems(cartItems.map(item =>
        item.id === productId ? { ...item, quantidade: item.quantidade - 1 } : item
      ));
    } else {
      setCartItems(cartItems.filter(item => item.id !== productId));
    }
  };

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantidade, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.preco * item.quantidade, 0);

  if (loading) {
    return <p>Carregando produtos...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <>
      <Header cartItems={cartItems} totalItems={totalItems} totalPrice={totalPrice} onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveFromCart} />
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
            isOpen={!!selectedProduct}
            onClose={closeModal}
            title={selectedProduct.nome}
            description={selectedProduct.descricao}
            img={selectedProduct.foto}
            price={selectedProduct.preco}
            onAddToCart={() => handleAddToCart(selectedProduct)}
          />
        )}
      </ContainerProdutos>
      <Cart
        isOpen={isCartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
      />
      <Footer />
    </>
  );
};

export default Products;