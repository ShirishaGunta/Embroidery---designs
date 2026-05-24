import { useState } from "react";
import { Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Container,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

//   const navItems = [
//     "Home",
//     "Categories",
//     "Collections",
//     "Contact",
//   ];
const navItems = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "Categories",
    path: "/categories",
  },

  {
    name: "Collections",
    path: "/collections",
  },

  {
    name: "Contact",
    path: "/contact",
  },
];

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #f1f1f1",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              minHeight: "75px",
              px: {
                xs: 0,
                md: 2,
              },
            }}
          >
            {/* LEFT SECTION */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              {/* MOBILE MENU */}
              <IconButton
                sx={{
                  display: {
                    xs: "flex",
                    md: "none",
                  },
                  color: "#2D2D2D",
                }}
                onClick={() => setOpenDrawer(true)}
              >
                <MenuIcon />
              </IconButton>

              {/* LOGO */}
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: "#D63384",
                  letterSpacing: 1,

                  fontSize: {
                    xs: "1.3rem",
                    md: "1.8rem",
                  },
                }}
              >
                Embroidery Designs
              </Typography>
            </Box>

            {/* DESKTOP MENU */}
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },

                gap: 4,
              }}
            >
            {navItems.map((item) => (
  <Button
    key={item.name}
    component={Link}
    to={item.path}
    color="inherit"
    sx={{
      color: "#2D2D2D",
      fontWeight: 500,
      fontSize: "0.95rem",

      position: "relative",

      "&:hover": {
        backgroundColor: "transparent",
        color: "#D63384",
      },

      "&::after": {
        content: '""',
        position: "absolute",
        width: 0,
        height: "2px",
        bottom: 0,
        left: 0,
        backgroundColor: "#D63384",
        transition: "0.3s",
      },

      "&:hover::after": {
        width: "100%",
      },
    }}
  >
    {item.name}
  </Button>
))}
            </Box>

            {/* RIGHT SECTION */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",

                gap: {
                  xs: 0.5,
                  md: 2,
                },
              }}
            >
              {/* SEARCH */}
              <IconButton
                sx={{
                  color: "#2D2D2D",
                }}
              >
                <SearchIcon />
              </IconButton>

              {/* WISHLIST */}
              <IconButton
                sx={{
                  color: "#2D2D2D",
                }}
              >
                <FavoriteBorderIcon />
              </IconButton>

              {/* CART */}
              <IconButton
                sx={{
                  color: "#2D2D2D",
                }}
              >
                <Badge
                  badgeContent={2}
                  color="primary"
                >
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>

              {/* LOGIN BUTTON */}
              <Button
                variant="contained"
                startIcon={<PersonIcon />}
                sx={{
                  backgroundColor: "#D63384",
                  px: 2.5,
                  borderRadius: "10px",

                  display: {
                    xs: "none",
                    sm: "flex",
                  },

                  "&:hover": {
                    backgroundColor: "#bb2d73",
                  },
                }}
              >
                Login
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box
          sx={{
            width: 260,
          }}
        >
          {/* DRAWER HEADER */}
          <Box
            sx={{
              p: 3,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: "#D63384",
              }}
            >
              Embroidery Designs
            </Typography>
          </Box>

          <Divider />

          {/* MENU ITEMS */}
          <List>
            {navItems.map((item) => (
              <ListItem
                key={item}
                disablePadding
              >
                <ListItemButton>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      fontWeight: 500,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider />

          {/* LOGIN BUTTON */}
          <Box
            sx={{
              p: 2,
            }}
          >
            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#D63384",

                "&:hover": {
                  backgroundColor: "#bb2d73",
                },
              }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;