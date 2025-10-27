import { Box, Divider, Typography } from "@mui/material";

import type { OrderItemProps } from "../../interfaces/order";

function OrderItem({ orderItem }: OrderItemProps) {
  const { title, totalPrice, img, quantity } = orderItem;
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          p: { xs: 2, sm: 2.5 },
          mb: 2,
          borderRadius: 3,
          gap: { xs: 2, sm: 3 },
          direction: "rtl",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: { xs: 1.5, sm: 2.5 },
            flex: 1,
          }}
        >
          <Box
            component="img"
            src={img}
            alt={title}
            sx={{
              width: { xs: "30%", sm: 100, md: 120 },
              height: { xs: "auto", sm: 100, md: 120 },
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
                fontWeight: 500,
                mt: 0.5,
              }}
            >
              قیمت: {totalPrice},000 تومان
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider />
    </>
  );
}

export default OrderItem;
