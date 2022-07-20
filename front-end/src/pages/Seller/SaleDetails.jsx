import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailsCard from '../../components/DetailsCard';
import ClientNavBar from '../../components/NavBar';
import api from '../../services/api';

function SaleDetails() {
  const [products, setProducts] = useState([]);
  const [sale, setSale] = useState({});
  const [saler, setSaler] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const SELLER = 'seller_order_details__element-order-details-label-';
  const { id } = useParams();
  const newDate = new Date(sale.saleDate);
  const saleDate = (`
  ${newDate.getDate()}/0${newDate.getMonth() + 1}/${newDate.getFullYear()}`);

  const selectSellerOrder = (saleOrder, sellers) => {
    const selerOrder = sellers.find((selerItem) => saleOrder.sellerId === selerItem.id);

    setSaler(selerOrder.name);
  };

  const handleGetOrder = useCallback(async () => {
    const { data } = await api.get(`/sales/${id}`);
    const { data: dataSeller } = await api.get('/users/sellers');

    selectSellerOrder(data, dataSeller);
    setSale(data);
    setTotalPrice(data.totalPrice.replace(/\./, ','));
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
              data-testid={ `${SELLER}order-id` }
            >
              {sale.id + 1}
            </td>
            <td
              data-testid={ `${SELLER}delivery-status` }
            >
              {saler}
            </td>
            <td
              data-testid={ `${SELLER}order-date` }
            >
              {saleDate}
            </td>
            <td
              data-testid={ `${SELLER}delivery-status` }
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
      <button
        type="button"
        disabled={ sale.status !== 'Entregue' }
        data-testid="customer_order_details__button-delivery-check"
      >
        Marcar como entregue
      </button>
      <p
        data-testid="customer_order_details__element-order-total-price"
      >
        {totalPrice}
      </p>
    </div>
  );
}

export default SaleDetails;
