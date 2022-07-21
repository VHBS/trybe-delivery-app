import React, { useCallback, useEffect, useState } from 'react';
import ClientNavBar from '../../components/NavBar';
import SellerOrdersCard from '../../components/SellerOrdersCard';
import api from '../../services/api';

function SellerOrders() {
  const [sales, setSales] = useState([]);
  const handleGetSales = useCallback(async () => {
    const { id } = JSON.parse(localStorage.getItem('user'));
    const { data } = await api.get(`/sales/seller/${id}`);
    setSales(data);
  }, []);

  useEffect(() => {
    handleGetSales();
  }, [handleGetSales]);

  return (
    <>
      <ClientNavBar />
      <h1>saler page</h1>
      {sales.map((sale, index) => (
        <SellerOrdersCard
          key={ index }
          id={ sale.id }
          pedido={ index }
          status={ sale.status }
          date={ sale.saleDate }
          totalPrice={ sale.totalPrice }
          deliveryAddress={ sale.deliveryAddress }
          deliveryNumber={ sale.deliveryNumber }
        />
      ))}
    </>
  );
}

export default SellerOrders;
