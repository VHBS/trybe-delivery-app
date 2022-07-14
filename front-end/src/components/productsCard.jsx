import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../hooks/useProducts';

function ProductsCard() {
  const { handleProducts, products } = useProducts();
  useEffect(() => {
    try {
      handleProducts();
    } catch (error) {
      throw new Error(error);
    }
  }, [handleProducts]);

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
