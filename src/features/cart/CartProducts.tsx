import { useSelector } from "react-redux";

import { Box, Typography } from "@mui/material";
import { getCart, getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import CartItem from "./CartItem";
import Btn from "../../ui/Btn";

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
        <Box>
          <Btn type="button" to="/order/new" width="100%">
            ثبت سفارش
          </Btn>
        </Box>
      </Box>
    </Box>
  );
}

export default CartProducts;
