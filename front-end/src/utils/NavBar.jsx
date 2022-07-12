import React from 'react';


function ClientNavBar() {

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
         Seu nome
        </p>

        <button
          data-testid="customer_products__element-navbar-link-logout"
          type="button"
        >
          Sair
        </button>

      </div>
    </nav>
  );
}

export default ClientNavBar;
