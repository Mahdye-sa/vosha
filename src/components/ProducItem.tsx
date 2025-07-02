import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import { useCart } from "../contexts/CartContext";

interface Product {
  id: number;
  title: string;
  description: string;
  img: string;
  price: number;
}

interface ProductItemProps {
  productItem: Product;
}

function ProducItem({ productItem }: ProductItemProps) {
  const { cartItems, addToCart, increaseQuantity, decreaseQuantity } =
    useCart();

  const itemInCart = cartItems.find((item) => item.id === productItem.id);
  const quantity = itemInCart?.quantity || 0;

  return (
    <Card
      sx={{
        mx: "auto",
        maxWidth: "100%",
        flexShrink: 0,
        textAlign: "center",
        borderRadius: 4,
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={productItem.img}
        alt={productItem.title}
      />
      <CardContent>
        <Typography variant="h6" mb={1}>
          {productItem.title}
        </Typography>
        <Typography variant="body2">{productItem.description}</Typography>
        <Typography variant="subtitle1" fontWeight="bold" mt={1}>
          {productItem.price.toLocaleString()} تومان
        </Typography>
      </CardContent>

      {!itemInCart ? (
        <Button
          variant="contained"
          sx={{ mb: 2, borderRadius: 4 }}
          onClick={() => addToCart(productItem)}
        >
          افزودن به سبد خرید
        </Button>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            mb: 2,
          }}
        >
          <Button
            variant="outlined"
            size="small"
            onClick={() => increaseQuantity(productItem.id)}
            sx={{ fontSize: 20 }}
          >
            +
          </Button>
          <Typography variant="h6" px={1}>
            {quantity}
          </Typography>
          <Button
            variant="outlined"
            size="small"
            onClick={() => decreaseQuantity(productItem.id)}
            sx={{ fontSize: 20 }}
          >
            -
          </Button>
        </Box>
      )}
    </Card>
  );
}

export default ProducItem;
