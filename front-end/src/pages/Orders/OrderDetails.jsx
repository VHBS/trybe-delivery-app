import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailsCard from '../../components/DetailsCard';
import ClientNavBar from '../../components/NavBar';
import api from '../../services/api';

function OrderDetails() {
  const [products, setProducts] = useState([]);
  const [sale, setSale] = useState({});
  const CUSTOMER = 'customer_order_details__element-order';
  const { id } = useParams();
  const newDate = new Date(sale.saleDate);
  const saleDate = (`${newDate.getDay()}/${newDate.getMonth()}/${newDate.getFullYear()}`);
  const handleGetOrder = useCallback(async () => {
    const { data } = await api.get(`/sales/${id}`);
    console.log(data);
    setSale(data);
    setProducts(data.products);
  }, [id]);

  useEffect(() => {
    handleGetOrder();
  }, [handleGetOrder]);

  return (
    <div>
      <ClientNavBar />
      <h1>detalhes do pedido</h1>
      <table>
        <thead>
          <tr>
            <td
              data-testid={ `${CUSTOMER}-details-label-order-id` }
            >
              {sale.id}
            </td>
            <td
              data-testid={ `${CUSTOMER}-details-label-seller-name` }
            >
              {/* {data.} */}
              seller name
            </td>
            <td
              data-testid={ `${CUSTOMER}-details-label-order-date` }
            >
              {saleDate}
            </td>
            <td
              data-testid={ `${CUSTOMER}-details-label-delivery-status` }
            >
              {sale.status}
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub Total</th>
          </tr>
          {products.map((product, index) => (
            <DetailsCard key={ product.id } index={ index } product={ product } />
          ))}
        </tbody>
      </table>
      <p
        data-testid="customer_order_details__button-delivery-check"
      >
        Marcar como entregue
      </p>
      <p
        data-testid="customer_order_details__element-order-total-price-"
      >
        {/* TODO: calcular o total do pedido */}
        total: R$
      </p>
    </div>
  );
}

export default OrderDetails;
