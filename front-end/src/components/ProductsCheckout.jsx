import PropTypes from 'prop-types';
import React from 'react';

export default function ProductsCheckout({ product, index }) {
  return (
    <div>
      {index + 1}
      <span
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
      >
        {product.name}
      </span>
      <span
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
      >
        {product.quantity}
      </span>
      <span
        data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
      >
        {product.price}
        valor unitario
      </span>
      <span
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
        {product.subTotal}
        subtotal
      </span>
      <span>
        <button
          type="button"
          data-testid={ `customer_checkout__element-order-table-remove-${index}` }
        >
          remover
        </button>
      </span>
    </div>
  );
}

ProductsCheckout.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    id: PropTypes.number,
    quantity: PropTypes.number,
    subTotal: PropTypes.number,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
