export interface Product {
  id: number;
  img: string;
  title: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

export interface ProductProps {
  id: number;
  title: string;
  description: string;
  img: string;
  price: number;
  quantity: number;
}

export interface ProductItemProps {
  productItem: ProductProps;
}
