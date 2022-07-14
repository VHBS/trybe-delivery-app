import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import useProducts from '../hooks/useProducts';

function ProductsCard() {
  // const { handleProducts, products } = useProducts();
  const [products, setProducts] = useState([]);
  const url = 'http://localhost:3001/products';

  useEffect(() => {
    try {
    // handleProducts();
      axios.get(url).then((response) => {
        setProducts(response.data);
      });
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  const productsMap = products.map((product) => (
    <div key={ product.id }>
      <h3 data-testid={ `customer_products__element-card-title-${product.id}` }>
        {product.name}
      </h3>
      <p data-testid={ `customer_products__element-card-price-${product.id}` }>
        {product.price}
      </p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${product.id}` }
        src={ product.urlImage }
        alt="card-bg"
      />
      <button
        type="button"
        value="add-btn"
        data-testid={ `customer_products__button-card-add-item-${product.id}` }
      >
        +
      </button>
      <input
        type="number"
        min="0"
        data-testid={ `customer_products__input-card-quantity-${product.id}` }
      />
      <button
        type="button"
        value="rm-btn"
        data-testid={ `customer_products__button-card-rm-item-${product.id}` }
      >
        -
      </button>
    </div>
  ));

  return (
    <>
      <h1>lista todos os produtos</h1>
      {!products ? null : <ul>{productsMap}</ul>}
      <Link to="customer/checkout" />
    </>
  );
}

export default ProductsCard;
