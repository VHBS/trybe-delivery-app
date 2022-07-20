import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function MyOrders({ id, pedido, status, date, total }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [saleDate, setSaleDate] = useState(0);

  useEffect(() => {
    setTotalPrice(total.replace(/\./, ','));
    setSaleDate(moment(date).format('DD/MM/YYYY'));
  }, [total, date, saleDate]);

  return (
    <Link to={ `/customer/orders/${id}` }>
      <div>
        <p
          data-testid={
            `customer_orders__element-order-id-${pedido + 1}`
          }
        >
          {pedido + 1}

        </p>
        <p
          data-testid={
            `customer_orders__element-delivery-status-${pedido + 1}`
          }
        >
          {status}
        </p>
        <p
          data-testid={
            `customer_orders__element-order-date-${pedido + 1}`
          }
        >
          {saleDate}
        </p>
        <p
          data-testid={
            `customer_orders__element-card-price-${pedido + 1}`
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
  id: PropTypes.number.isRequired,
  pedido: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
};
