import React from 'react';
import { useNavigate } from 'react-router-dom';

function ClientNavBar() {
  const navigate = useNavigate();
  const nameUser = JSON.parse(localStorage.getItem('user'));

  const handleLogOut = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <nav>
      <div>
        <button
          data-testid="customer_products__element-navbar-link-products"
          type="button"
        >
          Produtos

        </button>

        <button
          data-testid="customer_products__element-navbar-link-orders"
          type="button"
        >
          Meus Pedidos
        </button>

      </div>

      <div>
        <p
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {nameUser.name}
        </p>

        <button
          data-testid="customer_products__element-navbar-link-logout"
          type="button"
          onClick={ handleLogOut }
        >
          Sair
        </button>

      </div>
    </nav>
  );
}

export default ClientNavBar;
