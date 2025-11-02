import { Box, Divider, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GetUserEmail from "../features/user/GetUserEmail";

function Footer() {
  // const navLinks = [
  //   { label: "خانه", path: "/" },
  //   { label: "محصولات", path: "/products" },
  //   { label: "مقالات", path: "/#blog-section" },
  // ];

  const contactList = [
    {
      content: <Typography variant="h6">123456789</Typography>,
      icon: <WhatsAppIcon fontSize="medium" />,
    },
    {
      content: <Typography variant="h6">vosha shop</Typography>,
      icon: <YouTubeIcon fontSize="medium" />,
    },
    {
      content: <Typography variant="h6">vosha-ms</Typography>,
      icon: <InstagramIcon fontSize="medium" />,
    },
    {
      content: <Typography variant="h6">vosha-gol</Typography>,
      icon: <TelegramIcon fontSize="medium" />,
    },
  ];

  return (
    <>
      <Box
        sx={{
          backgroundColor: "primary.main",
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          gap: { md: 2, xs: 4 },
          justifyContent: "space-between",
          px: 6,
          py: 3,
          textAlign: "center",
          mt: 20,
        }}
      >
        <Box>
          <img
            src="https://webcade.ir/view/articleid/blogimage/portalid/0/w/900/h/901/url/articleimages/webenamad-8.jpg"
            alt="نماد اعتماد"
            style={{
              maxHeight: 150,
              borderRadius: 15,
            }}
          />
        </Box>

        <Divider />

        <Box sx={{ color: "white", textAlign: "center" }}>
          <Typography variant="h5" pb={3}>
            اطلاع از جدیدترین محصولات
          </Typography>
          <GetUserEmail />
        </Box>

        <Divider />

        <Box sx={{ color: "white", textAlign: "center" }}>
          <Typography variant="h5" pb={1}>
            شبکه های اجتماعی
          </Typography>

          <Box
            sx={{
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {contactList.map((contact) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                {contact.content}
                {contact.icon}
              </Box>
            ))}
          </Box>
        </Box>

        <Divider />

        <Box sx={{ color: "white", textAlign: "center" }}>
          <Typography variant="h5">وشا</Typography>
        </Box>
      </Box>

      <Box sx={{ textAlign: "center", py: 0.5 }}>
        <Typography variant="body1"> . تمامی حقوق محفوظ است </Typography>
        <Box />
      </Box>
    </>
  );
}

export default Footer;
