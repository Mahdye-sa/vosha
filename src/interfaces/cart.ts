export interface UpdateQuantityProps {
  productId: number;
}

export interface DeleteItemProps {
  productId: number;
}

export interface CartItemProps {
  cartItem: {
    id: number;
    title: string;
    img: string;
    totalPrice: number;
    quantity: number;
  };
}
