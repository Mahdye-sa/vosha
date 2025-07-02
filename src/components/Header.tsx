// components/Header.js
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          color="inherit"
          sx={{ textDecoration: "none" }}
        >
          فروشگاه گل
        </Typography>

        {/* دکمه‌ها در دسکتاپ */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <Button color="inherit" component={Link} to="/products">
            محصولات
          </Button>
          <Button color="inherit" component={Link} to="/blog">
            وبلاگ
          </Button>
          <Button color="inherit" component={Link} to="/cart">
            سبد خرید
          </Button>
          <Button color="inherit" component={Link} to="/login">
            ورود
          </Button>
        </Box>

        {/* منو همبرگری در موبایل */}
        <IconButton
          sx={{ display: { xs: "block", md: "none" } }}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
