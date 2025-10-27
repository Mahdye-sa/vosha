import { Box, Button, Typography } from "@mui/material";

import { Link, useNavigate, useParams } from "react-router-dom";

function SuccessOrder() {
  const navigate = useNavigate();
  const { orderId } = useParams();
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <Box
          component="img"
          src="/petle.png"
          alt="petle"
          sx={{
            width: { xs: "80%", md: "50%" },
            maxWidth: 400,
            objectFit: "contain",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontSize: { xs: "1.5rem", sm: "1.7rem", md: "2.2rem" },
            }}
          >
            ( : سفارش شما ثبت شد و به زودی به دستتون میرسه
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", gap: 5 }}>
            <Button
              onClick={() => navigate(`/orders/${orderId}`)}
              variant="outlined"
              sx={{
                fontSize: {
                  xs: "1rem",
                  sm: "1rem",
                  md: "1.2rem",
                },
                borderRadius: 5,
              }}
            >
              پیگیری سفارش
            </Button>
            <Button
              component={Link}
              to={"/"}
              variant="outlined"
              sx={{
                fontSize: {
                  xs: "1rem",
                  sm: "1rem",
                  md: "1.2rem",
                },
                borderRadius: 5,
              }}
            >
              بازگشت به خانه
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SuccessOrder;
