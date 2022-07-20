import React, { useCallback, useEffect, useState } from 'react';
import ClientNavBar from '../../components/NavBar';
import api from '../../services/api';
import MyOrders from './MyOrders';

function Orders() {
  const [orders, setOrders] = useState([]);

  const handleGetOrders = useCallback(async () => {
    const { data } = await api.get('/sales');
    setOrders(data);
  }, []);

  useEffect(() => {
    handleGetOrders();
  }, [handleGetOrders]);

  return (
    <>
      <ClientNavBar />
      <h1>orders</h1>
      {orders.map((order, index) => (
        <MyOrders
          key={ index }
          pedido={ index }
          status={ order.status }
          date={ order.date }
          totalPrice={ order.totalPrice }
        />
      ))}
    </>
  );
}

export default Orders;
