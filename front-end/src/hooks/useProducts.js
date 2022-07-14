import { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';

export default function useProducts() {
  const value = useContext(ProductsContext);
  return value;
}
