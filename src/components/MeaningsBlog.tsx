import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

export default function MeaningsBlog() {
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
        معنای گل‌ها: هر گل چه چیزی را بیان می‌کند؟
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          mb: 2,
          fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.6rem" },
        }}
      >
        گل‌ها زبان خاموش احساسات ما هستند
      </Typography>

      {/* پاراگراف ابتدایی */}
      <Typography paragraph>
        گل‌ها از دیرباز برای انتقال پیام‌های عاطفی و معنوی به کار رفته‌اند.
        آن‌ها در فرهنگ‌ها و مناسبت‌های مختلف، از عشق و دوستی گرفته تا همدردی و
        احترام، حضوری پررنگ دارند. انتخاب درست گل می‌تواند پیامی عمیق و
        تأثیرگذار بر مخاطب منتقل کند.
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          mb: 2,
          fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.6rem" },
        }}
      >
        معانی رایج برخی از گل‌های محبوب:
      </Typography>

      <List>
        {[
          {
            primary: "🌹 رز قرمز - نماد عشق عمیق",
            secondary:
              "رز قرمز در بیشتر فرهنگ‌ها به عنوان نماد عشق، اشتیاق و زیبایی جا افتاده است. انتخابی کلاسیک برای بیان عشق در مناسبت‌هایی مثل ولنتاین یا سالگرد ازدواج.",
          },
          {
            primary: "🌷 لاله - نماد امید، زندگی نو و عشق پاک",
            secondary:
              "لاله‌ در فرهنگ ایرانی و اروپایی، پیام‌آور زندگی دوباره، پاکی و امید است. رنگ‌های مختلف لاله نیز معانی متفاوتی دارند.",
          },
          {
            primary: "🌼 نرگس - نماد احترام، تحسین و زیبایی خیره‌کننده",
            secondary:
              "نرگس در ادبیات فارسی نیز بسیار مورد توجه قرار گرفته و به‌عنوان نماد زیبایی معشوق در شعرها آمده است.",
          },
          {
            primary: "🌻 آفتابگردان - نماد وفاداری، انرژی مثبت و خوش‌بینی",
            secondary:
              "این گل همیشه رو به خورشید است و به‌همین دلیل، نماد امید، نشاط و وفاداری به‌شمار می‌آید.",
          },
          {
            primary: "🌸 شکوفه گیلاس - نماد زیبایی گذرا و زندگی کوتاه",
            secondary:
              "در فرهنگ ژاپنی، این گل نمایانگر زودگذری زندگی و ارزش لحظات است. بسیار محبوب در فصل بهار.",
          },
          {
            primary: "💐 گل میخک - نماد قدردانی و افتخار",
            secondary:
              "رنگ‌های مختلف میخک معنای متفاوتی دارند؛ سفید برای پاکی، قرمز برای تحسین و صورتی برای قدردانی.",
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
        نکاتی برای انتخاب هوشمندانه گل:
      </Typography>

      <List>
        {[
          {
            primary: "🎯 به مناسبت توجه کنید",
            secondary:
              "برای تولد، سالگرد، یا عزاداری نوع و رنگ گل بسیار مهم است.",
          },
          {
            primary: "🎨 رنگ گل اهمیت دارد",
            secondary:
              "مثلاً گل سفید نشانه‌ی صلح و پاکی است، در حالی که قرمز نشانه‌ی عشق و شور.",
          },
          {
            primary: "📍 به فرهنگ مخاطب دقت کنید",
            secondary:
              "در برخی فرهنگ‌ها برخی گل‌ها معناهای خاص یا حتی منفی دارند.",
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
        استفاده آگاهانه از زبان گل‌ها نه‌تنها باعث زیبایی هدیه می‌شود، بلکه
        احساسات شما را به شکلی عمیق‌تر و معنادارتر منتقل می‌کند.
      </Typography>
    </Box>
  );
}
