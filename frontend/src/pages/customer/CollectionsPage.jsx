import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Stack,
  Chip,
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import Navbar from "../../components/layouts/Navbar";
import Footer from "../../components/layouts/Footer";

const collections = [
  {
    id: 1,
    title: "Royal Silk Collection",
    category: "Silk",
    price: "₹ 2,499",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  },

  {
    id: 2,
    title: "Bridal Embroidery",
    category: "Bridal",
    price: "₹ 3,299",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
  },

  {
    id: 3,
    title: "Traditional Cotton",
    category: "Cotton",
    price: "₹ 1,499",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
  },

  {
    id: 4,
    title: "Designer Party Wear",
    category: "Designer",
    price: "₹ 2,899",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b",
  },

  {
    id: 5,
    title: "Elegant Wedding Wear",
    category: "Wedding",
    price: "₹ 4,299",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
  },

  {
    id: 6,
    title: "Premium Festival Style",
    category: "Festival",
    price: "₹ 2,699",
    image:
      "https://images.unsplash.com/photo-1583391733981-8496f0d1c2e2",
  },
];

const CollectionsPage = () => {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* PAGE */}
      <Box
        sx={{
          backgroundColor: "#FFF9FB",
          minHeight: "100vh",
          py: {
            xs: 4,
            md: 6,
          },
        }}
      >
        <Container maxWidth="xl">
          {/* HEADER */}
          <Box
            sx={{
              textAlign: "center",
              mb: 7,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: "#2D2D2D",

                fontSize: {
                  xs: "2rem",
                  md: "3.2rem",
                },

                mb: 2,
              }}
            >
              Our Collections
            </Typography>

            <Typography
              sx={{
                color: "#6B7280",
                maxWidth: "700px",
                mx: "auto",

                fontSize: {
                  xs: "0.95rem",
                  md: "1rem",
                },
              }}
            >
              Explore our exclusive ready-made blouse
              collections designed with elegance, comfort,
              and premium craftsmanship.
            </Typography>
          </Box>

          {/* COLLECTIONS GRID */}
          <Grid container spacing={4}>
            {collections.map((item) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={item.id}
              >
                <Card
                  sx={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    backgroundColor: "#fff",

                    boxShadow:
                      "0 4px 15px rgba(0,0,0,0.05)",

                    transition: "0.3s",

                    height: "100%",

                    display: "flex",
                    flexDirection: "column",

                    "&:hover": {
                      transform: "translateY(-8px)",
                    },
                  }}
                >
                  {/* IMAGE */}
                  <Box
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt={item.title}
                      sx={{
                        height: {
                          xs: 320,
                          md: 380,
                        },

                        objectFit: "cover",

                        transition: "0.4s",

                        "&:hover": {
                          transform: "scale(1.05)",
                        },
                      }}
                    />

                    {/* CATEGORY CHIP */}
                    <Chip
                      label={item.category}
                      sx={{
                        position: "absolute",
                        top: 15,
                        left: 15,

                        backgroundColor: "#D63384",
                        color: "#fff",

                        fontWeight: 500,
                      }}
                    />
                  </Box>

                  {/* CONTENT */}
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 1,

                          fontSize: {
                            xs: "1rem",
                            md: "1.1rem",
                          },
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        sx={{
                          color: "#D63384",
                          fontWeight: 700,
                          fontSize: "1.1rem",
                          mb: 3,
                        }}
                      >
                        {item.price}
                      </Typography>
                    </Box>

                    {/* BUTTONS */}
                    <Stack
                      direction="row"
                      spacing={2}
                    >
                      <Button
                        fullWidth
                        variant="contained"
                        startIcon={
                          <ShoppingCartOutlinedIcon />
                        }
                        sx={{
                          backgroundColor: "#D63384",
                          borderRadius: "12px",
                          py: 1.2,

                          "&:hover": {
                            backgroundColor: "#bb2d73",
                          },
                        }}
                      >
                        Add
                      </Button>

                      <Button
                        variant="outlined"
                        sx={{
                          minWidth: "50px",
                          borderRadius: "12px",
                          borderColor: "#D63384",
                          color: "#D63384",

                          "&:hover": {
                            borderColor: "#D63384",
                            backgroundColor: "#FFF0F6",
                          },
                        }}
                      >
                        <FavoriteBorderIcon />
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default CollectionsPage;