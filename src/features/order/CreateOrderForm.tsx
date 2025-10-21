import { Checkbox, Box, Button, Paper, TextField } from "@mui/material";
import { Form } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCart } from "../cart/cartSlice";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

function CreateOrderForm() {
  const cart = useSelector(getCart);

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
          width: { xs: "80%", sm: "60%", md: "50%" },
          textAlign: "center",
          py: 3,
          borderRadius: 4,
          direction: "rtl",
        }}
      >
        <Form>
          <TextField
            label="نام و نام خانوادگی تحویل گیرنده"
            variant="outlined"
            sx={{ width: "85%", mb: 2 }}
          />
          <TextField
            label="آدرس"
            variant="outlined"
            multiline
            rows={2}
            sx={{ width: "85%", mb: 2 }}
          />
          <TextField
            label="شماره تماس"
            variant="outlined"
            sx={{ width: "85%", mb: 2 }}
          />
          <TextField
            label="توضیحات"
            variant="outlined"
            sx={{ width: "85%", mb: 2 }}
          />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mr: { xs: 3, md: 5 },
            }}
          >
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            <label>تحویل سریع</label>
          </Box>

          <input type="hidden" name="cart" value={JSON.stringify(cart)} />

          <Button
            type="submit"
            sx={{
              mt: 2.5,
              backgroundColor: "primary.main",
              color: "#ffd0df",
              borderRadius: 5,
              width: "90%",
              fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.5rem" },
              fontWeight: "bold",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
              },
            }}
          >
            تایید سفارش
          </Button>
        </Form>
      </Paper>
    </Box>
  );
}

export default CreateOrderForm;
