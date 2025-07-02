import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

export default function OccasionsBlog() {
  return (
    <Box
      sx={{
        mx: "auto",
        px: 2,
        py: 4,
        width: "90%",
        textAlign: "right",
      }}
      dir="rtl"
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 4,
          fontSize: { xs: "1.6rem", sm: "1.7rem", md: "2.5rem" },
        }}
      >
        انتخاب بهترین گل‌ها برای مناسبت‌های خاص
      </Typography>

      <Typography paragraph>
        هر مناسبت حال و هوای خودش را دارد، و انتخاب گل مناسب می‌تواند به زیبایی
        حس شما را منتقل کند. در ادامه، برای هر مناسبت، پیشنهاد گل مناسب
        آورده‌ایم:
      </Typography>

      <List>
        {[
          {
            primary: "🎂 تولد",
            secondary:
              "رز صورتی، گلایل یا ژربرا برای تبریک، شادی و انرژی مثبت.",
          },
          {
            primary: "💍 سالگرد ازدواج",
            secondary: "رز قرمز، ارکیده یا لیلیوم برای عشق، وفاداری و احترام.",
          },
          {
            primary: "🎓 تبریک موفقیت",
            secondary:
              "آفتابگردان یا لیسیانتوس برای جشن گرفتن موفقیت و انگیزه.",
          },
          {
            primary: "💐 تشکر",
            secondary: "نرگس یا داوودی سفید برای قدردانی و احترام.",
          },
          {
            primary: "🖤 تسلیت",
            secondary: "گلایل یا زنبق سفید برای ابراز همدردی و آرامش‌بخشی.",
          },
          {
            primary: "👶 تولد نوزاد",
            secondary: "میخک یا ژیپسوفیلا برای جشن تولد و ظرافت.",
          },
        ].map((item, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
                  }}
                >
                  {item.primary}
                </Typography>
              }
              secondary={
                <Typography
                  sx={{
                    mt: 0.5,
                    color: "text.secondary",
                    fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.2rem" },
                  }}
                >
                  {item.secondary}
                </Typography>
              }
              sx={{ textAlign: "right" }}
            />
          </ListItem>
        ))}
      </List>

      <Typography sx={{ mt: 3 }}>
        گل‌ها زبان بی‌کلام احساسات‌اند. با انتخاب درست و هوشمندانه، می‌توانید
        پیام خود را با لطافت و تأثیرگذاری بیشتری منتقل کنید.
      </Typography>
    </Box>
  );
}
