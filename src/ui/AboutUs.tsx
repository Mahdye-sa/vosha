import { Box, Typography } from "@mui/material";

function WhyUs() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row-reverse" },
        gap: 1,
        alignItems: "center",
        mb: { xs: 7, sm: 10, md: 15 },
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          mx: "auto",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 4,
            fontSize: { xs: "1.6rem", sm: "1.7rem", md: "2.5rem" },
          }}
        >
          درباره ی ما
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.6rem" },
          }}
        >
          ما در وشا باور داریم هر گل یک داستان دارد؛ داستانی از عشق، قدردانی،
          دوستی یا حتی دلتنگی. با بیش از 5 سال تجربه در تهیه و ارسال گل‌های تازه
          و باکیفیت، تلاش می‌کنیم لحظات شما را زیباتر کنیم
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.6rem" },
          }}
        >
          🌸 با ما، یک شاخه گل ساده می‌تواند حرف دل شما را بزند
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.6rem" },
          }}
        >
          ما در تهران فعالیت می‌کنیم و سفارش‌ها را به‌صورت آنلاین و حضوری
          می‌پذیریم
        </Typography>
      </Box>

      <Box
        component="img"
        src="/vecteezy_realistic-cherry-blossom-branch-png-pink-sakura-flower_22993690.png"
        alt="cherry blossom"
        sx={{
          flex: 0.5,
          width: { xs: "100%", md: "30%" },
          ml: { md: "auto" },
        }}
      />
    </Box>
  );
}

export default WhyUs;
