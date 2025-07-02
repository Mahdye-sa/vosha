import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "چطور می‌تونم سفارش بدم؟",
    answer:
      "برای ثبت سفارش کافیست محصول موردنظر را به سبد خرید اضافه کرده و مراحل پرداخت را طی کنید.",
  },
  {
    question: "آیا امکان ارسال در همان روز وجود دارد؟",
    answer:
      "بله، در صورتی که تا قبل از ساعت ۴ عصر سفارش ثبت شود، همان روز ارسال انجام می‌شود.",
  },
  {
    question: "ارسال به چه شهرهایی انجام می‌شه؟",
    answer:
      "در حال حاضر ارسال فقط در شهر تهران انجام می‌شود. به‌زودی شهرهای دیگر نیز اضافه خواهند شد.",
  },
  {
    question: "اگر از گل‌ها راضی نبودم، امکان مرجوعی هست؟",
    answer:
      "تا ۲۴ ساعت پس از دریافت، در صورت وجود مشکل در سفارش، امکان تعویض یا بازگشت هزینه وجود دارد.",
  },
  {
    question: "چطور می‌تونم با پشتیبانی تماس بگیرم؟",
    answer:
      "می‌توانید از طریق چت سایت، تماس تلفنی یا شبکه‌های اجتماعی با ما در ارتباط باشید.",
  },
];

export default function FAQAccordion() {
  return (
    <Box
      sx={{
        width: "90%",
        mx: "auto",
        mb: { xs: 10, sm: 10, md: 15 },
      }}
      dir="rtl"
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          mb: 4,
          fontSize: { xs: "1.6rem", sm: "1.7rem", md: "2.5rem" },
        }}
      >
        سوالات متداول
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index} dir="rtl">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              textAlign: "right",
            }}
          >
            <Typography
              sx={{
                textAlign: "right",
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" },
              }}
            >
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                textAlign: "right",
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" },
              }}
            >
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
