import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { formatPrice } from "../../utils/helper";
import UpdataQuantity from "../cart/UpdataQuantity";
import type { ProductItemProps } from "../../interfaces/product";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";

function ProducItem({ productItem }: ProductItemProps) {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(productItem.id));

  const isInCart = currentQuantity > 0;

  function handleClick() {
    const newItem = {
      id: productItem.id,
      img: productItem.img,
      title: productItem.title,
      price: productItem.price,
      quantity: 1,
      totalPrice: productItem.price * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <Card
      sx={{
        maxWidth: "100%",
        flexShrink: 0,
        textAlign: "center",
        borderRadius: 4,
        pb: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        component="img"
        height="320"
        image={productItem.img}
        alt={productItem.title}
      />
      <CardContent>
        <Typography variant="h5" mb={2} fontWeight="bold">
          {productItem.title}
        </Typography>

        <Typography variant="body1">{productItem.description}</Typography>

        <Typography variant="h6" fontWeight="bold" mt={2}>
          {formatPrice(productItem.price)}
        </Typography>
      </CardContent>

      {isInCart ? (
        <UpdataQuantity productId={productItem.id} />
      ) : (
        <Button
          variant="contained"
          sx={{ borderRadius: 4, fontWeight: "bold", fontSize: "1rem", px: 2 }}
          onClick={handleClick}
        >
          <AddShoppingCartIcon fontSize="small" />
          <Typography fontSize="1rem"> افزودن به سبد خرید</Typography>
        </Button>
      )}
    </Card>
  );
}

export default ProducItem;
