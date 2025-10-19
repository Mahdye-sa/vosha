function formatPrice(price: number): string {
  return price.toLocaleString() + " , 000" + " تومان ";
}

export { formatPrice };
