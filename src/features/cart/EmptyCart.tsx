import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <Box sx={{ textAlign: "center", mt: 10 }}>
      <Typography variant="h4" mb={3}>
        سبد خرید شما خالیه !
      </Typography>

      <Typography variant="h5" mb={5}>
        از قسمت محصولات دسته گل مورد علاقتو انتخاب کن😍
      </Typography>

      <Button
        component={Link}
        to="/products"
        sx={{
          backgroundColor: "primary.main",
          color: "#ffd0df",
          borderRadius: 5,
          width: { md: 210, sm: 200, xs: 1800 },
          fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
          fontWeight: "bold",
          "&:hover": {
            transform: "scale(1.03)",
            boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
            justifyContent: "center",
          },
        }}
      >
        صفحه محصولات
      </Button>
    </Box>
  );
}

export default EmptyCart;
