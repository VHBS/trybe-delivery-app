import React from 'react';
import ProductsCheckout from '../../components/ProductsCheckout';
import useCart from '../../hooks/useCart';

export default function Checkout() {
  const { productsCart } = useCart();
  console.log(productsCart);

  return (
    <div>
      <span>Item</span>
      <span>Descrição</span>
      <span>Quantidade</span>
      <span>Valor Unitário</span>
      <span>Sub Total</span>
      <span>Remover Item</span>

      {(productsCart && productsCart.length > 0) && productsCart
        .map((productCart, index) => (
          <ProductsCheckout
            key={ productCart.id }
            index={ index }
            product={ productCart }
          />
        ))}
    </div>
  );
}
