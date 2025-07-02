import { Box, Button, Typography } from "@mui/material";
import { useProducts } from "../contexts/ProductsContext";
import ProducItem from "./ProducItem";
import { Link } from "react-router-dom";

function ProductSlide() {
  const { products } = useProducts();
  return (
    <Box sx={{ mb: { xs: 5, md: 12 } }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          mb: 4,
          fontSize: { xs: "1.6rem", sm: "1.7rem", md: "2.5rem" },
        }}
      >
        محبوب ترین ها
      </Typography>
      <Box
        sx={{
          backgroundColor: "secondary.main",
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
          overflowX: "auto",
          p: 3,
          gap: 2,
        }}
      >
        {products.map((productItem) => (
          <ProducItem key={productItem.id} productItem={productItem} />
        ))}
        <Button
          component={Link}
          to="/products"
          variant="text"
          sx={{
            whiteSpace: "nowrap",
            fontWeight: "bold",
            flexShrink: 0,
            height: 50,
            fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
          }}
        >
          &larr; همه ی محصولات
        </Button>
      </Box>
    </Box>
  );
}

export default ProductSlide;
