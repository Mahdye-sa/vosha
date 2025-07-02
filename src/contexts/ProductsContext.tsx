import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

const BASE_URL: string = "http://localhost:8000";

interface Product {
  id: number;
  title: string;
  description: string;
  img: string;
  price: number;
}

interface ProductSlideContextType {
  products: Product[];
}

interface ProductsProviderProps {
  children: ReactNode;
}

const ProductsContext = createContext<ProductSlideContextType>({
  products: [],
});

function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`${BASE_URL}/products`);

      const data: Product[] = await res.json();
      setProducts(data);
      console.log(data);
    }
    fetchProduct();
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
}

function useProducts() {
  const context = useContext(ProductsContext);
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { ProductsProvider, useProducts };
