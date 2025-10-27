import type { CartItemProps } from "./cart";

export interface OrderProps {
  id?: number;
  name: string;
  address: string;
  phone: string;
  description?: string;
  priority: boolean;
  totalPrice: number;
  cart: CartItemProps[];
}

export interface OrderItemProps {
  orderItem: {
    id: number;
    title: string;
    img: string;
    totalPrice: number;
    quantity: number;
  };

  id?: number;
  title?: string;
  img?: string;
  totalPrice?: number;
  quantity?: number;
}
