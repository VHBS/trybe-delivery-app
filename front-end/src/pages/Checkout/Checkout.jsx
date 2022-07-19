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
  const [address, setAdress] = useState('');
  const [addressNumber, setAdressNumber] = useState(0);
  const [addressIsEmpty, setAddressIsEmpty] = useState(false);
  const [cartIsEmpty, setCartIsEmpty] = useState(false);
  // const [cartDone, setCartDone] = useState(false);
  const THREESECONDS = 3000;

  const user = JSON.parse(localStorage.getItem('user'));

  const handleSellers = useCallback(async () => {
    const { data } = await api.get('/users/sellers');
    setSellers(data);
    setSelectedSeller(data[0].id);
  }, []);

  useEffect(() => {
    handleSellers();
  }, [setSellers, handleSellers, addressNumber]);

  async function handleSendOrder(body) {
    const { data } = await api.post('/sales', body,
      { headers: { authorization: user.token } });
    console.log(data);
    setTimeout(() => {
      navigate(`/customer/orders/${data.id}`);
    }, THREESECONDS);
  }

  function handleCheckOrder(body) {
    if (body.totalPrice === 0 || body.products.length === 0) {
      return setCartIsEmpty(true);
    }
    if (
      body.deliveryAddress === undefined
      || body.deliveryAddress === '' || body.deliveryNumber === 0) {
      return setAddressIsEmpty(true);
    }
    return handleSendOrder(body);
  }

  async function handleFinalizePurchase() {
    const saleBody = {
      userId: user.id,
      sellerId: selectedSeller,
      totalPrice: totalCartValue,
      deliveryAddress: address,
      deliveryNumber: addressNumber,
      products: productsCart,
    };
    handleCheckOrder(saleBody);
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
            value={ seller.id }
          >
            {seller.name}
          </option>))}
      </select>
      <input
        type="text"
        name="adress"
        placeholder="endereço"
        value={ address }
        onChange={ (e) => setAdress(e.target.value) }
        data-testid="customer_checkout__input-address"
      />
      <input
        type="number"
        name="addressNumber"
        placeholder="123"
        min={ 0 }
        value={ addressNumber }
        onInput={ (e) => setAdressNumber(Number(e.target.value)) }
        onChange={ (e) => setAdressNumber(Number(e.target.value)) }
        data-testid="customer_checkout__input-addressNumber"
      />
      {addressIsEmpty && <p>preecha o endereço corretamente</p>}
      {cartIsEmpty && <p>adicione produtos no carrinho</p>}
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ handleFinalizePurchase }
      >
        Finalizar Pedido
      </button>
    </div>
  );
}
