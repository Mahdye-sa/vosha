import type { CartItemProps } from "./cart";

export interface OrderProps {
  order: {
    name: string;
    address: string;
    phone: string;
    description?: string;
    priority: boolean;
    totalPrice: number;
    cart: CartItemProps[];
  };
}
