import { Box } from "@mui/material";
import { useProducts } from "../contexts/ProductsContext";
import ProducItem from "../components/ProducItem";

function Products() {
  const { products } = useProducts();
  return (
    <Box
      sx={{
        my: 5,

        mx: "auto",
        width: { md: "70%", sm: "80%", xs: "90%" },
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        },

        gap: 2,
      }}
    >
      {products.map((product) => (
        <ProducItem productItem={product} key={product.id} />
      ))}
    </Box>
  );
}

export default Products;
