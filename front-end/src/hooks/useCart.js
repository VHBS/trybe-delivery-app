import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export default function useCart() {
  const value = useContext(CartContext);
  return value;
}
