import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

const SELLER = 'seller_order_details__element-order-';

function SellerDetailsOrderCard({ index, product }) {
  const [subTotal, setsubTotal] = useState('0');

  useEffect(() => {
    const settingSubTotal = product.SaleProduct.quantity * Number(product.price);
    setsubTotal(settingSubTotal);
  }, [product.SaleProduct.quantity, product.price]);

  return (
    <tr>
      <td
        data-testid={
          `${SELLER}table-item-number-${index + 1}`
        }
      >
        {index + 1}
      </td>
      <td
        data-testid={
          `${SELLER}table-name-${index + 1}`
        }
      >
        {product.name}
      </td>
      <td
        data-testid={
          `${SELLER}table-quantity-${index + 1}`
        }
      >
        {product.SaleProduct.quantity}
      </td>
      <td
        data-testid={
          `${SELLER}table-unit-price-${index + 1}`
        }
      >
        {product.price.toString().replace(/\./, ',')}
      </td>
      <td
        data-testid={
          `${SELLER}table-unit-sub-total-${index + 1}`
        }
      >
        {subTotal.toString().replace(/\./, ',')}
      </td>
    </tr>
  );
}

export default SellerDetailsOrderCard;

SellerDetailsOrderCard.propTypes = {
  product: PropTypes.shape(
    {
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      SaleProduct: PropTypes.shape({
        quantity: PropTypes.number.isRequired,
      }).isRequired,
    },
  ).isRequired,
  index: PropTypes.number.isRequired,
};
