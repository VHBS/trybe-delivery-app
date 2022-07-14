import React from 'react';
import ClientNavBar from '../../components/NavBar';
import ProductsCard from '../../components/productsCard';

function Products() {
  return (
    <>
      <ClientNavBar />
      <h1>Produtos</h1>
      <ProductsCard />
    </>
  );
}

export default Products;
