import {
  Box,
  Typography,
  IconButton,
  Divider,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useCart } from "../contexts/CartContext";
import DeleteIcon from "@mui/icons-material/Delete";

function Cart() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0)
    return (
      <Box sx={{ p: 5, textAlign: "center" }}>
        <Typography variant="h6">سبد خرید شما خالی است</Typography>
      </Box>
    );

  return (
    <Box
      sx={{ p: 2, width: "90%", mx: "auto", mb: 10, textAlign: "center" }}
      dir="rtl"
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 4,
          fontSize: { xs: "1.6rem", sm: "1.7rem", md: "2.5rem" },
        }}
      >
        سبد خرید
      </Typography>

      {cartItems.map((item) => (
        <Card
          key={item.id}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row", md: "row" },
            mb: { xs: 4, md: 2 },
            p: 2,
            borderRadius: 4,
            alignItems: "center",
            direction: "rtl",
          }}
        >
          <CardMedia
            component="img"
            image={item.img}
            alt={item.title}
            sx={{
              width: { xs: "100%", sm: "30%", md: "20%" },
              height: { xs: "100%", sm: "100%" },
              objectFit: "cover",
              borderRadius: 3,
              ml: 3,
            }}
          />

          <CardContent sx={{ flex: 1, textAlign: "right", width: "100%" }}>
            <Typography variant="subtitle1" fontWeight="bold">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
              قیمت: {item.price.toLocaleString()} تومان
            </Typography>
            <Typography variant="body2" color="text.secondary">
              جمع: {(item.price * item.quantity).toLocaleString()} تومان
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mt: 2,
                flexWrap: "wrap",
              }}
            >
              <Button
                variant="outlined"
                size="small"
                onClick={() => increaseQuantity(item.id)}
              >
                +
              </Button>
              <Typography>{item.quantity}</Typography>
              <Button
                variant="outlined"
                size="small"
                onClick={() => decreaseQuantity(item.id)}
              >
                -
              </Button>

              <IconButton
                onClick={() => removeFromCart(item.id)}
                color="error"
                sx={{ mr: "auto" }}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      ))}

      <Divider sx={{ my: 3 }} />

      <Box
        sx={{
          textAlign: "right",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 5,
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          جمع کل: {totalPrice.toLocaleString()} تومان
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{ borderRadius: 4, flex: 1 }}
        >
          ادامه خرید / پرداخت
        </Button>
      </Box>
    </Box>
  );
}

export default Cart;
