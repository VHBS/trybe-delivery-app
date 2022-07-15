import React, { useEffect } from 'react';
import ClientNavBar from '../../components/NavBar';
import ProductsCard from '../../components/ProductsCard';
import useProducts from '../../hooks/useProducts';

function Products() {
  const { handleProducts, products } = useProducts();
  useEffect(() => {
    try {
      handleProducts();
    } catch (error) {
      throw new Error(error);
    }
  }, [handleProducts]);

  return (
    <>
      <ClientNavBar />
      <h1>Produtos</h1>
      { products.length > 0 && products.map((product) => (<ProductsCard
        product={ product }
        key={ product.id }
      />))}
    </>
  );
}

export default Products;
