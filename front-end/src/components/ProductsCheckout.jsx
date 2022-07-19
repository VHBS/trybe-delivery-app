import PropTypes from 'prop-types';
import React from 'react';
import useCart from '../hooks/useCart';

export default function ProductsCheckout({ product, index }) {
  const { handleRemoveProduct } = useCart();

  return (
    <tr>
      <td data-testid={ `customer_checkout__element-order-table-item-number-${index}` }>
        {index + 1}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
      >
        {product.name}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
      >
        {product.quantity}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
      >
        {Number(product.price).toFixed(2).replace(/\./, ',')}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
        {Number(product.subTotal).toFixed(2).replace(/\./, ',')}
      </td>
      <td>
        <button
          type="button"
          data-testid={ `customer_checkout__element-order-table-remove-${index}` }
          onClick={ () => handleRemoveProduct(product) }
        >
          remover
        </button>
      </td>
    </tr>
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
