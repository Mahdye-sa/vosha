import { Box, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

function ContactUs() {
  return (
    <Box
      sx={{
        width: "90%",
        mx: "auto",
        display: "flex",
        flexDirection: { xs: "column", md: "row-reverse" },
        alignItems: "center",
        mb: { xs: 7, sm: 10, md: 15 },
      }}
    >
      <Box
        sx={{
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
          تماس با ما
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.6rem" },
            mb: 2,
          }}
        >
          اگر سوالی دارید، نیاز به مشاوره برای خرید گل دارید یا سفارش خاصی در
          ذهن‌تان است، ما اینجاییم تا کمک‌تان کنیم. هر زمان که خواستید با ما در
          ارتباط باشید. ما با عشق پاسخ‌گوی شما هستیم
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundImage: "url('/bg-contact.png')",
          backgroundSize: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: { xs: "80%", sm: "50%", md: "70%" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          py: 10,
        }}
      >
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.6rem" },
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
              gap: 1,
            }}
          >
            شماره تماس <PhoneIcon sx={{ fontSize: "1.4rem" }} />
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.6rem" },
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
              gap: 1,
            }}
          >
            آدرس فروشگاه <LocationOnIcon sx={{ fontSize: "1.4rem" }} />
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.6rem" },
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
              gap: 1,
            }}
          >
            ایمیل <EmailIcon sx={{ fontSize: "1.4rem" }} />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ContactUs;
