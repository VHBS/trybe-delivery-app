import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../hooks/useCart';

export default function CheckoutButton() {
  const navigate = useNavigate();
  const { productsCart } = useCart();
  const [totalCartValue, setTotalCartValue] = useState(0);

  useEffect(() => {
    const totalValue = productsCart.reduce((acc, curr) => {
      acc += curr.price * curr.quantity;
      return acc;
    }, 0);

    setTotalCartValue(totalValue);
  }, [productsCart]);

  return (
    <button
      data-testid="customer_products__button-cart"
      type="button"
      onClick={ () => navigate('../../customer/checkout') }
      disabled={ totalCartValue === 0 }
    >
      <p data-testid="customer_products__checkout-bottom-value">
        {totalCartValue.toFixed(2).replace(/\./, ',')}
      </p>
    </button>
  );
}
