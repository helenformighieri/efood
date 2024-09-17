import React, { useState } from 'react';
import Footer from '../../components/Footer/index.tsx';
import Header from '../../components/Header/index.tsx';
import Apresentacao from '../../components/Apresentacao/index.tsx';
import Produtos from '../../components/Produtos/index.tsx';
import { Modal } from '../../components/Modal/index.tsx';

const Products = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const openModal = (product: string) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <Header />
      <Apresentacao />
      <Produtos onProductClick={openModal} />
      <Footer />

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>{selectedProduct}</h2>
        <p>Descrição detalhada do produto aqui...</p>
      </Modal>
    </>
  );
};

export default Products;
