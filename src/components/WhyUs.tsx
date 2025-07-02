import { Box, Paper, Typography } from "@mui/material";
import {
  LocalFlorist,
  EmojiEvents,
  Groups,
  AccessTime,
} from "@mui/icons-material";

const features = [
  {
    icon: <LocalFlorist sx={{ fontSize: 40, color: "#E91E63" }} />,
    label: "گل‌های تازه و با کیفیت",
  },
  {
    icon: <EmojiEvents sx={{ fontSize: 40, color: "#FF9800" }} />,
    label: "جوایز و تخفیف‌های ویژه",
  },
  {
    icon: <Groups sx={{ fontSize: 40, color: "#3F51B5" }} />,
    label: "رضایت مشتریان ما",
  },
  {
    icon: <AccessTime sx={{ fontSize: 40, color: "#4CAF50" }} />,
    label: "تحویل سریع و به‌موقع",
  },
];

function WhyUs() {
  return (
    <Box
      sx={{
        py: { md: 5, xs: 2 },
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        alignItems: "center",
        mb: { xs: 7, sm: 6, md: 5 },
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
          چرا خرید از ما
        </Typography>

        <Box
          sx={{
            width: { md: "80%", xs: "95%" },
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(4, 1fr)",
              md: "repeat(4, 1fr)",
            },

            gap: 2,
          }}
        >
          {features.map((feature, index) => (
            <Paper
              key={index}
              elevation={3}
              sx={{
                width: "100%",
                p: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",

                borderRadius: 3,
                backgroundColor: "rgba(255, 255, 255, 0.6)",
                backdropFilter: "blur(6px)",
                boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                minHeight: 140,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",

                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 15px hsl(340, 81.10%, 80%)",
                },
              }}
            >
              {feature.icon}
              <Typography
                sx={{
                  mt: 1.5,
                  fontWeight: 500,
                  fontSize: "1rem",
                }}
              >
                {feature.label}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Box>

      <Box
        component="img"
        src="/vecteezy_cherry-blossom-flower-blooming-png-pink-sakura-flower_22952601.png"
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
