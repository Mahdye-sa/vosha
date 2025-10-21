import { useSelector } from "react-redux";

import { Box, Button, Typography } from "@mui/material";
import { getCart, getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

function CartProducts() {
  const cartItems = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {cartItems.map((cartItem) => (
        <CartItem cartItem={cartItem} key={cartItem.id} />
      ))}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 3 }}>
          <Typography variant="h6">
            تعداد کل محصولات : {totalCartQuantity}
          </Typography>

          <Typography variant="h6">قیمت کل : {totalCartPrice} تومان</Typography>
        </Box>
        <Button
          component={Link}
          to="/order"
          sx={{
            mt: 2.5,
            backgroundColor: "primary.main",
            color: "#ffd0df",
            borderRadius: 5,
            width: { md: "60%" },
            height: { md: "100%" },
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
            fontWeight: "bold",
            "&:hover": {
              transform: "scale(1.03)",
              boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
              justifyContent: "center",
            },
          }}
        >
          ثبت سفارش
        </Button>
      </Box>
    </Box>
  );
}

export default CartProducts;
