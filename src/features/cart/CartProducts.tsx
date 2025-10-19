import { useSelector } from "react-redux";

import { Box, Typography, IconButton, Divider } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { getCart } from "./cartSlice";

function CartProducts() {
  const cartItems = useSelector(getCart);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {cartItems.map((cartItem) => (
        <>
          <Box
            key={cartItem.id}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              borderRadius: 2,
            }}
          >
            {/* دکمه حذف سمت چپ */}
            <IconButton color="error">
              <DeleteIcon />
            </IconButton>

            {/* مشخصات محصول */}
            <Box sx={{ flex: 1, textAlign: "center" }}>
              <Typography variant="subtitle1">{cartItem.title}</Typography>
              <Typography variant="body2">
                تعداد: {cartItem.quantity}
              </Typography>
              <Typography variant="body2">
                قیمت: {cartItem.price} تومان
              </Typography>
            </Box>

            {/* عکس محصول سمت راست */}
            <Box>
              <img
                src={cartItem.img}
                alt={cartItem.title}
                style={{
                  width: 100,
                  height: 100,
                  objectFit: "cover",
                  borderRadius: 8,
                }}
              />
            </Box>
          </Box>
          <Divider />
        </>
      ))}
    </Box>
  );
}

export default CartProducts;
