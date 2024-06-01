import { createContext } from 'react';

interface CarItemsContextType {
  refreshCartItemIds: () => Promise<void>;
  cartItemIds: Map<number, number> | null;
}

const CartItemsContext = createContext<CarItemsContextType | null>(null);

export default CartItemsContext;
