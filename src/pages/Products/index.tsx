import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/index.tsx';
import Header from '../../components/Header/index.tsx';
import { ContainerProdutos, CardProduto, CardImg, CardTitle, CardDescription, CardButton } from './style.ts';
import { Modal } from '../../components/Modal/index.tsx';
import { useParams } from 'react-router-dom';
import { Cart } from '../../components/Cart/index.tsx';
import { Product } from '../../components/Cart/index.tsx';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/index.ts';
import { addToCart, removeFromCart } from '../../slices/cartSlice.ts';

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
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setCartOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);


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
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeFromCart(productId));
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
      <Header
        totalItems={totalItems}
        totalPrice={totalPrice}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
      />
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
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
      />
      <Footer />
    </>
  );
};

export default Products;