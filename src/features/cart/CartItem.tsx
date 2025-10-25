import { Box, Divider, Typography, Paper } from "@mui/material";
import type { CartItemProps } from "../../interfaces/cart";
import DeleteItem from "./DeleteItem";
import UpdateQuantity from "./UpdateQuantity";

function CartItem({ cartItem }: CartItemProps) {
  const { id, title, totalPrice, img, quantity } = cartItem;

  return (
    <>
      <Paper
        elevation={2}
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          alignItems: {
            xs: "center",
            sm: "center",
          },
          justifyContent: "space-between",
          p: { xs: 2, sm: 2.5 },
          mb: 2,
          borderRadius: 3,
          gap: { xs: 2, sm: 3 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            alignItems: {
              xs: "flex-start",
              sm: "center",
            },
            gap: { xs: 1.5, sm: 2.5 },
            flex: 1,
          }}
        >
          <Box
            component="img"
            src={img}
            alt={title}
            sx={{
              width: { xs: "100%", sm: 110, md: 130 },
              height: { xs: "auto", sm: 110, md: 130 },
              borderRadius: 2,
            }}
          />

          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 0.5,
              }}
            >
              {title}
            </Typography>

            <Typography variant="body1" sx={{ opacity: 0.8 }}>
              تعداد: {quantity}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "primary.main",
                fontWeight: 500,
                mt: 0.5,
              }}
            >
              قیمت: {totalPrice.toLocaleString()} تومان
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "row-reverse",
              sm: "row",
            },
            justifyContent: {
              xs: "space-between",
              sm: "center",
            },
            alignItems: "center",
            gap: { xs: 1.5, sm: 1 },
            width: { xs: "100%", sm: "auto" },
          }}
        >
          <UpdateQuantity productId={id} />
          <DeleteItem productId={id} />
        </Box>
      </Paper>

      <Divider />
    </>
  );
}

export default CartItem;
