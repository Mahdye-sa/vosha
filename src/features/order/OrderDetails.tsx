import { type LoaderFunctionArgs } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { getOrder } from "./apiOrder";
import type { OrderProps } from "../../interfaces/order";
import { Box, Typography } from "@mui/material";
import OrderItem from "./OrderItem";
import Btn from "../../ui/Btn";

function OrderDetails() {
  const order = useLoaderData() as OrderProps;
  const orderProducts = order.cart;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: { xs: "90%", sm: "90%", md: "85%" },
        mx: "auto",
        py: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          py: 4,
          px: { xs: 1, sm: 5, md: 15 },
          mb: 5,
          border: 2,
          borderRadius: 4,
          borderColor: "primary.main",
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{
              color: "white",
              backgroundColor: "#ec407a",
              p: 2,
              borderRadius: "1rem",
              mb: 3,
            }}
          >
            سفارش کد # {order.id}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            textAlign: "end",
          }}
        >
          <Typography variant="h6">نوع پرداخت : پرداخت در محل</Typography>
          <Typography variant="h6">زمان تحویل : جمعه 23 فروردین</Typography>
          <Typography variant="h6">
            مبلغ قابل پرداخت : {order.totalPrice.toLocaleString()} تومان
          </Typography>
        </Box>
      </Box>

      <Box>
        {orderProducts.map((orderItem) => (
          <OrderItem key={orderItem.id} orderItem={orderItem} />
        ))}
      </Box>

      <Box sx={{ mt: 6, textAlign: "center", mb: 3 }}>
        <Btn type="button" to="/" width="100%">
          بازگشت به خانه
        </Btn>
      </Box>
    </Box>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }: LoaderFunctionArgs) {
  const orderId = params.orderId;
  if (!orderId) throw new Error("شناسه سفارش یافت نشد");

  const order = await getOrder(orderId);
  return order;
}

export default OrderDetails;
