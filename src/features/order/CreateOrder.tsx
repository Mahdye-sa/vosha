import {
  Checkbox,
  Box,
  Paper,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { Form, redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useState } from "react";
import { createOrder } from "./apiOrder";
import store from "../../store";

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);

  const cart = useSelector(getCart);

  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  const fieldStyle = { width: "85%", mb: 2 };

  return (
    <Box
      sx={{
        backgroundImage: {
          md: "url('/bg-order_form.png')",
          xs: "url('/bg-order_form_xs.png')",
        },
        backgroundRepeat: "no-repeat",
        backgroundSize: { xs: "115%", sm: "80%" },
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 4, md: 0 },
      }}
    >
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2.5,
          width: { xs: "81%", sm: "70%", md: "60%" },
          textAlign: "center",
          py: 3,
          borderRadius: 4,
          direction: "rtl",
        }}
      >
        <Form method="POST">
          <TextField
            name="name"
            label="نام و نام خانوادگی تحویل گیرنده"
            variant="outlined"
            type="text"
            sx={fieldStyle}
          />
          <TextField
            name="address"
            label="آدرس"
            variant="outlined"
            type="text"
            multiline
            rows={2}
            sx={fieldStyle}
          />
          <TextField
            name="phone"
            label="شماره تماس"
            variant="outlined"
            type="text"
            sx={fieldStyle}
          />
          <TextField
            name="description"
            label="توضیحات"
            variant="outlined"
            sx={fieldStyle}
          />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mr: { xs: 2, md: 5 },
              width: "85%",
              mb: 2,
            }}
          >
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              onChange={() => setWithPriority(!withPriority)}
              value={withPriority}
            />
            <label> تحویل سریع (امکان افزایش هزینه ارسال ) </label>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mr: { xs: 3, md: 6 },
              width: "85%",
              mb: 3,
            }}
          >
            <Typography variant="h5">
              مبلغ قابل پرداخت : {totalPrice} تومان
            </Typography>
          </Box>

          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input type="hidden" name="totalPrice" value={totalPrice} />

          <Button
            type="submit"
            sx={{
              backgroundColor: "primary.main",
              color: "#ffd0df",
              px: 4,
              py: 1,
              borderRadius: 5,
              width: "90%",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              transition: "all 0.4s ease",
              fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
              fontWeight: "bold",
            }}
          >
            تایید سفارش
          </Button>
        </Form>
      </Paper>
    </Box>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData) as Record<string, string>;

  // console.log(data);

  const order = {
    userId: 1,
    name: data.name as string,
    address: data.address as string,
    phone: data.phone as string,
    description: data.description as string,
    totalPrice: Number(data.totalPrice),
    cart: JSON.parse(data.cart as string),
    priority: data.priority === "true",
  };

  const newOrder = await createOrder(order);

  store.dispatch(clearCart());

  return redirect(`/success/${newOrder.id}`);
}

export default CreateOrder;
