import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleArticlesClick = () => {
    if (location.pathname === "/") {
      const el = document.getElementById("blog-section");
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: "blog-section" } });
    }
  };

  const navLinks = [
    { label: "خانه", path: "/", icon: <HomeFilledIcon fontSize="large" /> },
    {
      label: "محصولات",
      path: "/products",
      icon: <FilterVintageIcon fontSize="large" />,
    },
    {
      label: "مقالات",
      onClick: handleArticlesClick,
      icon: <LibraryBooksIcon fontSize="large" />,
    },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          display: { xs: "none", md: "block" },
          backgroundColor: "primary.main",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", flexWrap: "wrap" }}>
          <img src="/logo.png" width="10%" alt="vosha logo" />

          <Box sx={{ display: "flex", gap: 2 }}>
            {navLinks.map((link) =>
              link.onClick ? (
                <Button
                  key={link.label}
                  onClick={link.onClick}
                  sx={{
                    color: "white",
                    fontSize: "1.2rem",
                  }}
                >
                  {link.label}
                </Button>
              ) : (
                <Button
                  key={link.path}
                  component={NavLink}
                  to={link.path!}
                  sx={{ color: "white", fontSize: "1.2rem" }}
                >
                  {link.label}
                </Button>
              )
            )}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton component={Link} to="/cart" sx={{ color: "white" }}>
              <ShoppingCartIcon fontSize="medium" />
            </IconButton>

            <IconButton component={Link} to="/login" sx={{ color: "white" }}>
              <AccountCircleIcon fontSize="medium" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <AppBar
        position="sticky"
        sx={{
          display: { md: "none", xs: "block" },
          backgroundColor: "primary.main",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <img src="/logo.png" width="30%" alt="vosha logo" />
          <IconButton
            onClick={() => setOpenDrawer(true)}
            sx={{ color: "white" }}
          >
            <MenuIcon fontSize="medium" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box
          sx={{
            minHeight: "100vh",
            width: "15rem",
            p: 2,
            backgroundColor: "primary.main",
            direction: "rtl",
          }}
        >
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <ListItem disablePadding>
              <ListItemButton
                component={NavLink}
                to="/login"
                onClick={() => setOpenDrawer(false)}
                sx={{
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 0,
                    flexDirection: "row-reverse",
                    width: "100%",
                  }}
                >
                  <ListItemText
                    primary="ورود / ثبت‌نام"
                    primaryTypographyProps={{
                      fontSize: "1rem",
                      color: "white",
                      textAlign: "center",
                    }}
                  />
                  <AccountCircleIcon fontSize="large" sx={{ color: "white" }} />
                </Box>
              </ListItemButton>
            </ListItem>

            <Divider sx={{ bgcolor: "white" }} />

            {navLinks.map((link) => (
              <Box key={link.label}>
                <ListItem disablePadding>
                  {link.onClick ? (
                    <ListItemButton
                      onClick={() => {
                        link.onClick?.();
                        setOpenDrawer(false);
                      }}
                      sx={{
                        justifyContent: "center",
                        textAlign: "center",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 0,
                          flexDirection: "row-reverse",
                          width: "100%",
                        }}
                      >
                        <ListItemText
                          primary={link.label}
                          primaryTypographyProps={{
                            fontSize: "1rem",
                            color: "white",
                            textAlign: "center",
                          }}
                        />
                        <Box sx={{ color: "white" }}>{link.icon}</Box>
                      </Box>
                    </ListItemButton>
                  ) : (
                    <ListItemButton
                      component={NavLink}
                      to={link.path!}
                      onClick={() => setOpenDrawer(false)}
                      sx={{
                        justifyContent: "center",
                        textAlign: "center",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 0,
                          flexDirection: "row-reverse",
                          width: "100%",
                        }}
                      >
                        <ListItemText
                          primary={link.label}
                          primaryTypographyProps={{
                            fontSize: "1rem",
                            color: "white",
                            textAlign: "center",
                          }}
                        />
                        <Box sx={{ color: "white" }}>{link.icon}</Box>
                      </Box>
                    </ListItemButton>
                  )}
                </ListItem>
                <Divider sx={{ bgcolor: "white" }} />
              </Box>
            ))}

            <ListItem disablePadding>
              <ListItemButton
                component={NavLink}
                to="/cart"
                onClick={() => setOpenDrawer(false)}
                sx={{
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 0,
                    flexDirection: "row-reverse",
                    width: "100%",
                  }}
                >
                  <ListItemText
                    primary="سبد خرید"
                    primaryTypographyProps={{
                      fontSize: "1rem",
                      color: "white",
                      textAlign: "center",
                    }}
                  />
                  <ShoppingCartIcon fontSize="large" sx={{ color: "white" }} />
                </Box>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Header;
