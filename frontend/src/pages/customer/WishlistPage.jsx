import {
  Box,
  Container,
  Typography,
  Grid,
} from "@mui/material";

import Navbar from "../../components/layouts/Navbar";
import Footer from "../../components/layouts/Footer";
import ProductCard from "../../components/common/ProductCard";

import { useWishlist } from "../../context/WishlistContext";

const WishlistPage = () => {
  const { wishlistItems } =
    useWishlist();

  return (
    <>
      <Navbar />

      <Box
        sx={{
          backgroundColor: "#FFF9FB",
          minHeight: "100vh",
          py: 6,
        }}
      >
        <Container maxWidth="xl">
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 5,

              fontSize: {
                xs: "2rem",
                md: "3rem",
              },
            }}
          >
            Wishlist
          </Typography>

          {wishlistItems.length === 0 ? (
            <Typography>
              No wishlist items added.
            </Typography>
          ) : (
            <Grid container spacing={3}>
              {wishlistItems.map(
                (product, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    key={index}
                  >
                    <ProductCard
                      product={product}
                    />
                  </Grid>
                )
              )}
            </Grid>
          )}
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default WishlistPage;