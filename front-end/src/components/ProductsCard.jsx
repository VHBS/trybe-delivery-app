import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ProductsCard({ product }) {
  const [quantity, setQuantity] = useState(0);

  const handleRemoveQuantity = () => {
    if (quantity === 0) {
      return;
    }
    setQuantity(quantity - 1);
  };

  return (
    <div>
      <h3 data-testid={ `customer_products__element-card-title-${product.id}` }>
        {product.name}
      </h3>
      <p data-testid={ `customer_products__element-card-price-${product.id}` }>
        {product.price.replace(/\./, ',')}
      </p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${product.id}` }
        src={ product.urlImage }
        alt="card-bg"
        height="100px"
      />
      <button
        type="button"
        value="add-btn"
        data-testid={ `customer_products__button-card-add-item-${product.id}` }
        onClick={ () => setQuantity(quantity + 1) }
      >
        +
      </button>
      <input
        type="number"
        min="0"
        data-testid={ `customer_products__input-card-quantity-${product.id}` }
        value={ quantity }
        onChange={ ({ target: { value } }) => setQuantity(value) }
      />
      <button
        type="button"
        value="rm-btn"
        data-testid={ `customer_products__button-card-rm-item-${product.id}` }
        onClick={ handleRemoveQuantity }
      >
        -
      </button>
    </div>
  );
}

export default ProductsCard;

ProductsCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    id: PropTypes.number,
    urlImage: PropTypes.string,
  }).isRequired,
};
