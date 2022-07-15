import React, { createContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext({});

function CartProvider({ children }) {
  const [productsCart, setProductsCart] = useState([]);

  const handleAddQuantityProduct = useCallback((productUpdated, quantity) => {
    const { id } = productUpdated;
    const updatedProducts = productsCart.map((productCart) => {
      if (productCart.id === id) {
        const updatedProduct = {
          ...productCart,
          quantity,
          subTotal: productCart.price * quantity,
        };
        return updatedProduct;
      }
      return productCart;
    });
    setProductsCart(updatedProducts);
  }, [productsCart]);

  const handleAddProduct = useCallback((productAdded, quantity) => {
    const { id, name, price } = productAdded;
    const subTotal = price * quantity;
    setProductsCart((prev) => [...prev, { id, name, price, quantity, subTotal }]);
  }, []);

  const handleRemoveProduct = useCallback((productToRemove) => {
    const { id } = productToRemove;
    const updatedProducts = productsCart.filter((productCart) => productCart.id !== id);
    console.log(updatedProducts);
    setProductsCart(updatedProducts);
  }, [productsCart]);

  const handleCheckCartProducts = useCallback((product, quantity) => {
    const productsInCart = productsCart
      .some((productCart) => productCart.id === product.id);

    if (productsInCart) {
      if (quantity === 0) return handleRemoveProduct(product);
      return handleAddQuantityProduct(product, quantity);
    }

    return handleAddProduct(product, quantity);
  }, [handleAddQuantityProduct, handleRemoveProduct, handleAddProduct, productsCart]);

  return (
    <CartContext.Provider
      value={ {
        handleCheckCartProducts,
        handleAddProduct,
        handleAddQuantityProduct,
        productsCart } }
    >
      { children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CartContext, CartProvider };
