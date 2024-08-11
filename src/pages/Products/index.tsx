import React from 'react';
import Footer from '../../components/Footer/index.tsx';
import Header from '../../components/Header/index.tsx';
import Apresentacao from '../../components/Apresentacao/index.tsx';
import Produtos from '../../components/Produtos/index.tsx';

const Products = () => {
  return (
  <>
    <Header />
    <Apresentacao />
    <Produtos />
    <Footer />
  </>
  );
};

export default Products;
