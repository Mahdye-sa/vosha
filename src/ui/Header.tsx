import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const navLinks = [
    { label: "خانه", path: "/" },
    { label: "محصولات", path: "/products" },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "white",
        color: "black",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        py: 0.5,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", flexWrap: "wrap" }}>
        {/* لوگو */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            textDecoration: "none",
            color: "inherit",
            fontWeight: "bold",
            fontFamily: "Vazirmatn, sans-serif",
          }}
        >
          🌸 Flower Shop
        </Typography>

        {/* لینک‌های ناوبری */}
        <Box sx={{ display: "flex", gap: 2 }}>
          {navLinks.map((link) => (
            <Button
              key={link.path}
              component={NavLink}
              to={link.path}
              sx={{
                color: "black",
                textDecoration: "none",
                "&.active": { color: "primary.main", fontWeight: "bold" },
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>

        {/* دکمه‌های سمت راست */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton
            component={Link}
            to="/cart"
            color="primary"
            sx={{ borderRadius: 2 }}
          >
            <ShoppingCart />
          </IconButton>

          <Button
            variant="outlined"
            component={Link}
            to="/login"
            sx={{ borderRadius: 2 }}
          >
            ورود
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
