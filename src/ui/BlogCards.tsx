import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "معنای گل‌ها: هر گل چه چیزی را بیان می‌کند؟",
    summary:
      "با معانی نمادین گل‌های محبوب آشنا شوید؛ از رز قرمز گرفته تا لاله و نرگس",
    image: "/vecteezy_colorful-variety-of-flowers-on-a-table_46005011.jpeg",
    link: "/blog/meanings",
  },
  {
    id: 2,
    title: "راهنمای نگهداری از گل‌های شاخه‌ای در خانه",
    summary:
      "ترفندهایی برای افزایش عمر گل‌های شاخه‌ای؛ از تعویض آب تا برش ساقه",
    image:
      "/vecteezy_vibrant-orange-roses-kitchen-bouquet-home-decor-flowers-and_56959487.jpeg",
    link: "/blog/care",
  },
  {
    id: 3,
    title: "انتخاب بهترین گل‌ها برای مناسبت‌های خاص ",
    summary:
      "چه گلی برای تولد، سالگرد یا عروسی مناسب است؟ در این مقاله بخوانید",
    image:
      "/vecteezy_romantic-red-roses-bouquet-near-window-valentine-s-day-gift_57254480.jpeg",
    link: "/blog/occasions",
  },
];

function BlogPreview() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "blog-section") {
      setTimeout(() => {
        const el = document.getElementById("blog-section");
        el?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [location]);

  return (
    <div id="blog-section">
      <Box
        sx={{
          width: { xs: "80%", sm: "90%", md: "90%" },
          mx: "auto",
          mb: { xs: 10, sm: 10, md: 15 },
          textAlign: "center",
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
          جدیدترین مقالات
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            gap: 3,
          }}
        >
          {blogPosts.map((blogPost) => (
            <Card
              key={blogPost.id}
              sx={{
                width: { xs: "100%", sm: 400 },
                borderRadius: 4,
                boxShadow: 3,
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 15px hsl(340, 81.10%, 80%)",
                },
              }}
            >
              <CardMedia
                component="img"
                image={blogPost.image}
                alt={blogPost.title}
                sx={{ height: 200 }}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" mb={2}>
                  {blogPost.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {blogPost.summary}
                </Typography>
                <Button
                  component={Link}
                  to={blogPost.link}
                  variant="outlined"
                  sx={{ mt: 3, borderRadius: 4 }}
                >
                  خواندن مقاله
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </div>
  );
}

export default BlogPreview;
