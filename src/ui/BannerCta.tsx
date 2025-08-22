import { Box, Typography } from "@mui/material";
import Btn from "../components/Btn";

function BannerCta() {
  return (
    <Box
      sx={{
        backgroundImage: 'url("/banner.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: { xs: "65vh", md: "100vh" },
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          p: 1,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(6px)",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
            fontWeight: "bold",
            color: "primary.main",
            mb: 2,
          }}
        >
          وُشا
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "1.5rem", sm: "1.7rem", md: "2.5rem" },
            fontWeight: "bold",
            color: "text.primary",
            mb: 2,
          }}
        >
          🩷 ارسال گل، سریع و با عشق
        </Typography>

        <Box
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            width: "100%",
          }}
        >
          <Btn to="/products"> محصولات</Btn>
          <Btn to="/login">ورود / ثبت‌نام</Btn>
        </Box>
      </Box>
    </Box>
  );
}

export default BannerCta;
