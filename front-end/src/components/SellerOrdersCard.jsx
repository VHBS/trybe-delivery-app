import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function SellerOrdersCard({
  id, pedido, status, date, totalPrice, deliveryAddress, deliveryNumber }) {
  return (
    <Link to={ `${id}` }>
      <div>
        <h1
          data-testid={
            `seller_orders__element-order-id-${pedido + 1}`
          }
        >
          Pedido
          {pedido + 1}
        </h1>
        <h1
          data-testid={
            `seller_orders__element-delivery-status-${id}`
          }
        >
          {status}
        </h1>
        <h1
          data-testid={
            `seller_orders__element-order-date-${pedido + 1}`
          }
        >
          {moment(date).format('DD/MM/YYYY')}
        </h1>
        <h1
          data-testid={
            `seller_orders__element-card-price-${pedido + 1}`
          }
        >
          {totalPrice}
        </h1>
        <h1
          data-testid={
            `seller_orders__element-card-address-${pedido + 1}`
          }
        >
          {`${deliveryAddress},${deliveryNumber}`}
        </h1>
      </div>
    </Link>
  );
}

SellerOrdersCard.propTypes = {
  id: PropTypes.number.isRequired,
  pedido: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
  deliveryAddress: PropTypes.string.isRequired,
  deliveryNumber: PropTypes.string.isRequired,
};

export default SellerOrdersCard;
