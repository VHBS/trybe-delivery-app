import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function MyOrders({
  pedido = 1,
  status = 'Pendente', date = '2022-07-20T16:52:33.525Z', totalPrice = '9,70' }) {
  return (
    <Link to={ `/customer/orders/${pedido}` }>
      <div>
        <p data-testid={ `customer_orders__element-order-id-${pedido}` }>{pedido}</p>
        <p
          data-testid={
            `customer_orders__element-delivery-status-${pedido}`
          }
        >
          {status}
        </p>
        <p data-testid={ `customer_orders__element-order-date-${pedido}` }>{date}</p>
        <p
          data-testid={
            `customer_orders__element-card-price-${pedido}`
          }
        >
          {totalPrice}
        </p>
      </div>
    </Link>
  );
}

export default MyOrders;

MyOrders.propTypes = {
  pedido: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  totalPrice: PropTypes.string.isRequired,
};
