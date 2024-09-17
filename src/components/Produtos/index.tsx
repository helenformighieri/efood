import React, { useState } from "react";
import { ContainerProdutos, CardProduto, CardImg, CardTitle, CardDescription, CardButton } from "../Produtos/style.ts";
import { Modal } from "../Modal/index.tsx";

import pizzaImg from "../../assets/images/pizza.png";

const Produtos: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<{ title: string; description: string; img: string } | null>(null);

  const products = [
    { 
      title: "Pizza Marguerita", 
      description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.", 
      img: pizzaImg 
    },
    { 
      title: "Pizza Marguerita", 
      description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.", 
      img: pizzaImg 
    },
    { 
      title: "Pizza Marguerita", 
      description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.", 
      img: pizzaImg 
    },
    { 
      title: "Pizza Marguerita", 
      description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.", 
      img: pizzaImg 
    },
    { 
      title: "Pizza Marguerita", 
      description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.", 
      img: pizzaImg 
    },
    { 
      title: "Pizza Marguerita", 
      description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.", 
      img: pizzaImg 
    },
  ];

  const handleProductClick = (product: { title: string; description: string; img: string }) => {
    setSelectedProduct({
      ...product,
      title: "Pizza Marguerita",
      description: `A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. 
        Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, 
        manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, 
        o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. 
        É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.
        <br/><br/>
        <span style="margin-top: 20px;">Serve: de 2 a 3 pessoas</span>`
    });
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <ContainerProdutos>
      {products.map((product, index) => (
        <CardProduto key={index}>
          <CardImg src={product.img} alt={product.title} />
          <CardTitle>{product.title}</CardTitle>
          <CardDescription>{product.description}</CardDescription>
          <CardButton onClick={() => handleProductClick(product)}>Saiba mais</CardButton>
        </CardProduto>
      ))}

      {selectedProduct && (
        <Modal
          isOpen={!!selectedProduct}
          onClose={closeModal}
          title={selectedProduct.title}
          description={selectedProduct.description}
          img={selectedProduct.img}
        />
      )}
    </ContainerProdutos>
  );
};

export default Produtos;
