import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ClientNavBar from '../../components/NavBar';
import SellerDetailsOrderCard from '../../components/SellerDetailsOrderCard';
import api from '../../services/api';

function SaleDetails() {
  const [products, setProducts] = useState([]);
  const [sales, setSale] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [status, setStatus] = useState('Pendente');
  const SELLER = 'seller_order_details__element-order-';
  const { id } = useParams();

  const handleGetOrder = useCallback(async () => {
    const { data } = await api.get(`/sales/${id}`);
    setSale(data);
    setStatus(data.status);
    setTotalPrice(data.totalPrice.replace(/\./, ','));
    setProducts(data.products);
    console.log(data.status);
  }, [id]);

  const handleChangeStatus = useCallback(async (newStatus) => {
    console.log(id);
    setStatus(`${newStatus}`);
    api.put(`/sales/${id}`, {
      status: `${newStatus}`,
    });
  }, [id]);

  useEffect(() => {
    handleGetOrder();
  }, [handleGetOrder, status]);

  return (
    <>
      <ClientNavBar />
      <h1>detalhes do pedido</h1>
      <button
        type="button"
        disabled={ (sales.status !== 'Pendente') }
        onClick={ () => handleChangeStatus('Preparando') }
        data-testid="seller_order_details__button-preparing-check"
      >
        Preparar pedido
      </button>

      <button
        type="button"
        disabled={ sales.status !== 'Preparando' }
        onClick={ () => handleChangeStatus('Em Trânsito') }
        data-testid="seller_order_details__button-dispatch-check"
      >
        Saiu para entrega
      </button>
      <table>
        <thead>
          <tr>
            <td
              data-testid={ `${SELLER}details-label-order-id` }
            >
              Pedido
              {sales.id}
            </td>
            <td
              data-testid={ `${SELLER}details-label-order-date` }
            >
              {moment(sales.saleDate).format('DD/MM/YYYY')}
            </td>
            <td
              data-testid={ `${SELLER}details-label-delivery-status` }
            >
              {sales.status}
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
            <SellerDetailsOrderCard
              key={ product.id }
              index={ index }
              product={ product }
            />
          ))}
        </tbody>
      </table>
      <p
        data-testid={ `${SELLER}total-price` }
      >
        {totalPrice}
      </p>
    </>
  );
}

export default SaleDetails;
