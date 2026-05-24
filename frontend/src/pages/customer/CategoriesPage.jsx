import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Stack,
  Drawer,
  IconButton,
  Divider,
  Slider,
  Checkbox,
  FormControlLabel,
  useMediaQuery,
} from "@mui/material";

import { useState } from "react";

import FilterListIcon from "@mui/icons-material/FilterList";

import Navbar from "../../components/layouts/Navbar";
import Footer from "../../components/layouts/Footer";
import CategoriesSection from "../../components/home/CategoriesSection";
import ProductCard from "../../components/common/ProductCard";

const products = [
  {
    name: "Royal Silk Blouse",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1583391733981-8496f0d1c2e2",
  },

  {
    name: "Designer Party Blouse",
    price: 1899,
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
  },

  {
    name: "Bridal Embroidery Blouse",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
  },

  {
    name: "Traditional Cotton Blouse",
    price: 1199,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
  },

  {
    name: "Wedding Collection",
    price: 2999,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  },

  {
    name: "Premium Silk Blouse",
    price: 1999,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b",
  },
];

const CategoriesPage = () => {
  const [openFilter, setOpenFilter] = useState(false);

  const isMobile = useMediaQuery("(max-width:900px)");

  const FilterContent = () => (
    <Box
      sx={{
        width: {
          xs: 260,
          md: "100%",
        },

        p: 3,
      }}
    >
      {/* TITLE */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          mb: 3,
        }}
      >
        Filters
      </Typography>

      {/* PRICE */}
      <Box sx={{ mb: 4 }}>
        <Typography
          sx={{
            fontWeight: 600,
            mb: 2,
          }}
        >
          Price Range
        </Typography>

        <Slider
          defaultValue={[500, 3000]}
          min={500}
          max={5000}
          valueLabelDisplay="auto"
          color="primary"
        />
      </Box>

      {/* FABRIC */}
      <Box sx={{ mb: 4 }}>
        <Typography
          sx={{
            fontWeight: 600,
            mb: 2,
          }}
        >
          Fabric
        </Typography>

        <Stack>
          <FormControlLabel
            control={<Checkbox />}
            label="Silk"
          />

          <FormControlLabel
            control={<Checkbox />}
            label="Cotton"
          />

          <FormControlLabel
            control={<Checkbox />}
            label="Georgette"
          />

          <FormControlLabel
            control={<Checkbox />}
            label="Designer"
          />
        </Stack>
      </Box>

      {/* SIZES */}
      <Box sx={{ mb: 4 }}>
        <Typography
          sx={{
            fontWeight: 600,
            mb: 2,
          }}
        >
          Sizes
        </Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap">
          {["32", "34", "36", "38", "40"].map((size) => (
            <Button
              key={size}
              variant="outlined"
              sx={{
                minWidth: "50px",
                borderRadius: "10px",
                mb: 1,
              }}
            >
              {size}
            </Button>
          ))}
        </Stack>
      </Box>

      {/* COLORS */}
      <Box>
        <Typography
          sx={{
            fontWeight: 600,
            mb: 2,
          }}
        >
          Colors
        </Typography>

        <Stack direction="row" spacing={2}>
          {["#D63384", "#000", "#1E40AF", "#166534"].map(
            (color, index) => (
              <Box
                key={index}
                sx={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  backgroundColor: color,
                  cursor: "pointer",
                  border: "2px solid #ddd",
                }}
              />
            )
          )}
        </Stack>
      </Box>
    </Box>
  );

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* PAGE */}
      <Box
        sx={{
          backgroundColor: "#FFF9FB",
          minHeight: "100vh",
          py: 5,
        }}
      >
        <Container maxWidth="xl">
          {/* PAGE TITLE */}
          <Box
            sx={{
              mb: 5,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 1,

                fontSize: {
                  xs: "2rem",
                  md: "3rem",
                },
              }}
            >
              Explore Collections
            </Typography>

            <Typography
              sx={{
                color: "#6B7280",
              }}
            >
              Discover premium ready-made blouses crafted
              with elegance and comfort.
            </Typography>
          </Box>

          {/* CATEGORIES SECTION */}
          <CategoriesSection />

          {/* MOBILE FILTER BUTTON */}
          {isMobile && (
            <Button
              startIcon={<FilterListIcon />}
              variant="contained"
              onClick={() => setOpenFilter(true)}
              sx={{
                mb: 3,
                backgroundColor: "#D63384",

                "&:hover": {
                  backgroundColor: "#bb2d73",
                },
              }}
            >
              Filters
            </Button>
          )}

          {/* CONTENT */}
          <Grid container spacing={4}>
            {/* DESKTOP FILTER */}
            {!isMobile && (
              <Grid item md={3}>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "20px",
                    boxShadow:
                      "0 4px 15px rgba(0,0,0,0.05)",
                    position: "sticky",
                    top: "100px",
                  }}
                >
                  <FilterContent />
                </Box>
              </Grid>
            )}

            {/* PRODUCTS */}
            <Grid item xs={12} md={9}>
              <Grid container spacing={3}>
                {products.map((product, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    lg={4}
                    key={index}
                  >
                    <ProductCard product={product} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* MOBILE FILTER DRAWER */}
      <Drawer
        anchor="left"
        open={openFilter}
        onClose={() => setOpenFilter(false)}
      >
        <FilterContent />
      </Drawer>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default CategoriesPage;