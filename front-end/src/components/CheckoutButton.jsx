import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../hooks/useCart';
import './CheckoutButton.css';

export default function CheckoutButton() {
  const navigate = useNavigate();
  const { totalCartValue } = useCart();

  return (
    <button
      className="checkout-btn"
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
