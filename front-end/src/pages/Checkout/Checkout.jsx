import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClientNavBar from '../../components/NavBar';
import ProductsCheckout from '../../components/ProductsCheckout';
import useCart from '../../hooks/useCart';
import api from '../../services/api';

export default function Checkout() {
  const navigate = useNavigate();
  const { productsCart, totalCartValue } = useCart();
  const [sellers, setSellers] = useState([]);
  const [selectedSeller, setSelectedSeller] = useState('');

  const handleSellers = useCallback(async () => {
    const { data } = await api.get('/users/sellers');
    console.log(data);
    setSellers(data);
    setSelectedSeller(data[0].name);
  }, []);

  useEffect(() => {
    handleSellers();
  }, [setSellers, handleSellers]);

  async function handleFinalizePurchase() {
    console.log(selectedSeller);
    navigate(`/customer/orders/${selectedSeller.id}`);
  }

  return (
    <div>
      <ClientNavBar />
      <h2>Finalizar Pedido</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub Total</th>
            <th>Remover Item</th>
          </tr>
        </thead>

        <tbody>
          {(productsCart && productsCart.length > 0) && productsCart
            .map((productCart, index) => (
              <ProductsCheckout
                key={ productCart.id }
                index={ index }
                product={ productCart }
              />
            ))}
        </tbody>
      </table>

      <h3>
        Total: R$
        <span
          data-testid="customer_checkout__element-order-total-price"
        >
          {totalCartValue.toFixed(2).replace('.', ',')}
        </span>
      </h3>

      <h3>
        Detalhes e Endereço para Entregar
      </h3>
      <select
        onChange={ (e) => setSelectedSeller(e.target.value) }
        name="sellers"
        value={ selectedSeller }
        data-testid="customer_checkout__select-seller"
      >
        {sellers && sellers.map((seller) => (
          <option
            key={ seller.id }
            value={ seller.name }
          >
            {seller.name}
          </option>))}
      </select>
      <input
        type="text"
        name="adress"
        placeholder="endereço"
        data-testid="customer_checkout__input-address"
      />
      <input
        type="number"
        name="addressNumber"
        id=""
        placeholder="123"
        min={ 0 }
        data-testid="customer_checkout__input-addressNumber"
      />
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        // TODO: metodo post na api e retornar o id da venda
        onClick={ handleFinalizePurchase }
      >
        Finalizar Pedido
      </button>
    </div>
  );
}
