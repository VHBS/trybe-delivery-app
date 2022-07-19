import PropTypes from 'prop-types';
import React from 'react';

function OrderCard({ id, status, saleDate, totalPrice }) {
  return (
    <>
      <span data-testid="customer_orders__element-order-id-">
        id
        {id}
      </span>
      <span data-testid="customer_orders__element-delivery-status-">
        {status}
      </span>
      <span data-testid={ `customer_orders__element-order-date-${id}` }>
        {saleDate}
      </span>
      <span data-testid="customer_orders__element-card-price-">
        R$
        {totalPrice}
      </span>
    </>
  );
}

OrderCard.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
};

export default OrderCard;
