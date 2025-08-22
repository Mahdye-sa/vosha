// components/Header.js

import { AppBar, Toolbar, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* <Image /> */}
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
        </Box>
      </Toolbar>
    </AppBar>
  );
}
