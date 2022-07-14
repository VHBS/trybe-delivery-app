import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import api from '../services/api';

const ProductsContext = createContext({});

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  async function handleProducts() {
    const { data } = await api.get('/products');

    setProducts(data);
  }

  return (
    <ProductsContext.Provider value={ { handleProducts, products } }>
      { children}
    </ProductsContext.Provider>
  );
}

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ProductsContext, ProductsProvider };
