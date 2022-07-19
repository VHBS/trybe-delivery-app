import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

const CUSTOMER = 'customer_order_details__element-order';

export default function DetailsCard({ product, index }) {
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    setSubTotal((Number(product.price)
    * Number(product.SaleProduct.quantity)));
  }, [product.SaleProduct.quantity, product.price]);

  return (
    <tr>
      <td
        data-testid={
          `${CUSTOMER}-table-item-number-${index}`
        }
      >
        {index + 1}
      </td>
      <td
        data-testid={ `${CUSTOMER}-table-name-${index}` }
      >
        {product.name}
      </td>
      <td
        data-testid={
          `${CUSTOMER}-table-quantity-${index}`
        }
      >
        {product.SaleProduct.quantity}
      </td>
      <td
        data-testid={
          `${CUSTOMER}-table-unit-price-${index}`
        }
      >
        {Number(product.price).toFixed(2).replace(/\./, ',')}
      </td>
      <td
        data-testid={
          `${CUSTOMER}-table-sub-total-${index}`
        }
      >
        {subTotal.toString().replace(/\./, ',')}
      </td>
    </tr>
  );
}

DetailsCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    id: PropTypes.number,
    SaleProduct: PropTypes.shape({
      quantity: PropTypes.number,
    }).isRequired,
    subTotal: PropTypes.number,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
