import { Box } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import ProducItem from "../features/product/ProductItem";
import Cart from "./Cart";

interface productProps {
  id: number;
  title: string;
  description: string;
  img: string;
  price: number;
}

function Products() {
  const products = useLoaderData<productProps[]>();

  return (
    <>
      <Box
        sx={{
          my: 5,

          mx: "auto",
          width: "90%",
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },

          gap: 2,
        }}
      >
        {products.map((product: productProps) => (
          <ProducItem key={product.id} productItem={product} />
        ))}
      </Box>
      <Cart />
    </>
  );
}

export default Products;
