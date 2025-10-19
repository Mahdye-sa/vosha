import { Box, Typography, Divider, Button } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "../features/cart/cartSlice";
import EmptyCart from "../features/cart/EmptyCart";
import CartProducts from "../features/cart/CartProducts";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCart);

  return (
    <Box
      sx={{
        p: 2,
        width: "90%",
        mx: "auto",
        mb: 10,
        justifyContent: "space-between",
      }}
      dir="rtl"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            pr: 2,
            fontSize: { xs: "1.6rem", sm: "1.7rem", md: "2.5rem" },
          }}
        >
          سبد خرید
        </Typography>

        <Button
          color="error"
          sx={{
            minWidth: "auto",
            p: 0,
          }}
          onClick={() => dispatch(clearCart())}
        >
          <ClearIcon fontSize="large" />
        </Button>
      </Box>

      <Divider sx={{ my: 3 }} />

      {cartItems.length > 0 ? <CartProducts /> : <EmptyCart />}
     
    </Box>
  );
}

export default Cart;
