import { Box, Paper } from "@mui/material";
import { Form } from "react-router-dom";

function OrderForm() {
  return (
    <Box
      sx={{
        backgroundImage: {
          md: "url('/bg-order_form.png')",
          xs: "url('/bg-order_form_xs.png')",
        },
        backgroundRepeat: "no-repeat",
        backgroundSize: { xs: "115%", sm: "90%" },
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <Paper>
        <Form></Form>
      </Paper>
    </Box>
  );
}

export default OrderForm;
