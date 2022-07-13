import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ClientNavBar from '../utils/NavBar';

function ProductsCard() {
  const [products, setProducts] = useState([]);
  const url = 'http://localhost:3001/customer/products';

  useEffect(() => {
    try {
      axios.get(url).then((response) => {
        setProducts(response.products);
      });
    } catch (error) {
      throw new Error(error);
    }
  }, [products]);

  const productsMap = products.map((product) => (
    <div key={ product.id }>
      <li data-testid="customer_products__element-card-title-">
        nome:
        {product.name}
      </li>
      <li data-testid="customer_products__element-card-price-">
        preço:
        {product.price}
      </li>
      <li data-testid="customer_products__img-card-bg-image-">
        imagem:
        <img src={ product.image } alt="card-bg" />
      </li>
      <li>
        <button
          type="button"
          value="add-btn"
          data-testid="customer_products__button-card-add-item-"
        >
          Adicionar
        </button>
      </li>
      <li>
        <button
          type="button"
          value="rm-btn"
          data-testid="customer_products__button-card-rm-item-"
        >
          Remover
        </button>
      </li>
    </div>
  ));

  return (
    <>
      <ClientNavBar />
      <h1>lista todos os produtos</h1>
      {!products ? null : <ul>{productsMap}</ul>}
      <Link to="customer/checkout" />
    </>
  );
}

export default ProductsCard;
