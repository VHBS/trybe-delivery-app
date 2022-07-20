import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function MyOrders({
  pedido = 1,
  status = 'Pendente', totalPrice = '81,45' }) {
  const date = '2022-07-20T16:52:33.525Z';
  const newDate = new Date(date);
  const saleDate = (`
${newDate.getDate()}/0${newDate.getMonth() + 1}/${newDate.getFullYear()}`);

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
        <p data-testid={ `customer_orders__element-order-date-${pedido}` }>{saleDate}</p>
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
  // date: PropTypes.number.isRequired,
  totalPrice: PropTypes.string.isRequired,
};
