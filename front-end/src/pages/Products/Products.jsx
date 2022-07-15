import React, { useEffect } from 'react';
import CheckoutButton from '../../components/CheckoutButton';
import ClientNavBar from '../../components/NavBar';
import ProductsCard from '../../components/ProductsCard';
import useProducts from '../../hooks/useProducts';
import { CartProvider } from '../../contexts/CartContext';

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
    <CartProvider>
      <ClientNavBar />
      <h1>Produtos</h1>
      { products.length > 0 && products.map((product) => (<ProductsCard
        product={ product }
        key={ product.id }
      />))}
      <CheckoutButton />
    </CartProvider>
  );
}

export default Products;
