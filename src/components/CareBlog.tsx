import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

export default function CareBlog() {
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
        راهنمای نگهداری از گل‌های شاخه‌ای در خانه
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          mb: 2,
          fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.6rem" },
        }}
      >
        چگونه عمر گل‌ها را در خانه بیشتر کنیم؟
      </Typography>

      <Typography paragraph>
        گل‌های شاخه‌ای یکی از زیباترین هدیه‌ها و عناصر دکوراتیو در خانه هستند.
        اما اگر به درستی از آن‌ها نگهداری نشود، خیلی زود پژمرده می‌شوند. در این
        مقاله، به شما روش‌هایی کاربردی برای افزایش طراوت و ماندگاری گل‌ها آموزش
        می‌دهیم.
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          mb: 2,
          fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.6rem" },
        }}
      >
        نکات کلیدی برای نگهداری از گل‌های شاخه‌ای:
      </Typography>

      <List>
        {[
          {
            primary: "✂️ برش مورب ساقه‌ها",
            secondary:
              "با استفاده از قیچی تیز، ساقه‌ها را به صورت مورب (زاویه‌دار) ببرید تا سطح تماس بیشتری برای جذب آب ایجاد شود.",
          },
          {
            primary: "💧 تعویض روزانه آب گلدان",
            secondary:
              "آب گلدان را هر روز عوض کنید. باکتری‌هایی که در آب رشد می‌کنند، باعث فساد ساقه‌ها و پژمردگی زودرس گل می‌شوند.",
          },
          {
            primary: "🧼 شست‌وشوی گلدان و پاکسازی برگ‌های زیر آب",
            secondary:
              "گلدان را هر چند روز یک‌بار بشویید و برگ‌هایی که زیر سطح آب قرار دارند را جدا کنید تا باعث پوسیدگی نشوند.",
          },
          {
            primary: "🌤 قرار دادن گل‌ها در جای خنک و به دور از نور مستقیم",
            secondary:
              "نور مستقیم خورشید و وسایل گرمایشی باعث تبخیر سریع آب و کاهش عمر گل‌ها می‌شود.",
          },
          {
            primary: "🥤 استفاده از مواد مغذی در آب",
            secondary:
              "می‌توانید از پودر تغذیه گل یا ترکیب کمی شکر و چند قطره لیمو در آب استفاده کنید تا به تغذیه گل کمک شود.",
          },
          {
            primary: "📦 باز نکردن کامل دسته‌گل بلافاصله پس از دریافت",
            secondary:
              "به گل‌ها فرصت دهید با دمای محیط سازگار شوند، سپس بسته‌بندی را باز کرده و در آب تازه قرار دهید.",
          },
          {
            primary: "🌡️ دوری از باد مستقیم کولر و بخاری",
            secondary:
              "هوای خشک باعث از دست رفتن رطوبت گل‌ها می‌شود و طراوت آن‌ها را کم می‌کند.",
          },
        ].map((item, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.6rem" },
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

      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          mt: 4,
          mb: 2,
          fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.6rem" },
        }}
      >
        نکات تکمیلی:
      </Typography>

      <List>
        {[
          {
            primary: "📏 کوتاه کردن روزانه ساقه‌ها",
            secondary:
              "هر روز ۱ تا ۲ سانتی‌متر از انتهای ساقه‌ها را ببرید تا جذب آب بهتر صورت گیرد.",
          },
          {
            primary: "🔎 بررسی گل‌ها و حذف گل‌های پژمرده",
            secondary:
              "گل‌های خراب یا پژمرده را جدا کنید تا باقی گل‌ها تحت تأثیر گازهای آزاد شده از آن‌ها قرار نگیرند.",
          },
        ].map((item, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.6rem" },
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

      <Typography sx={{ mt: 2 }}>
        رعایت این نکات ساده و کاربردی به شما کمک می‌کند تا مدت زمان بیشتری از
        طراوت و زیبایی گل‌های خود لذت ببرید. مراقبت از گل‌ها، علاوه بر حفظ
        زیبایی محیط، آرامش روانی نیز به همراه دارد.
      </Typography>
    </Box>
  );
}
