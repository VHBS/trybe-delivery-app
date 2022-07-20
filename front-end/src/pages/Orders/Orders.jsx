import React, { useCallback, useEffect, useState } from 'react';
import MyOrders from '../../components/MyOrders';
import ClientNavBar from '../../components/NavBar';
import api from '../../services/api';

function Orders() {
  const [orders, setOrders] = useState([]);

  const handleGetOrders = useCallback(async () => {
    const { id } = (JSON.parse(localStorage.getItem('user')));
    const { data } = await api.get(`/sales/user/${id}`);
    setOrders(data);
  }, []);

  useEffect(() => {
    handleGetOrders();
  }, [handleGetOrders]);

  return (
    <>
      <ClientNavBar />
      {orders.map((order, index) => (
        <MyOrders
          key={ index }
          pedido={ index }
          status={ order.status }
          date={ order.saleDate }
          total={ order.totalPrice }
          id={ order.id }
        />
      ))}
    </>
  );
}

export default Orders;
