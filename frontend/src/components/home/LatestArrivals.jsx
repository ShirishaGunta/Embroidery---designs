import {
  Box,
  Grid,
  Typography,
} from "@mui/material";

import ProductCard from "../common/ProductCard";

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
];

const LatestArrivals = () => {
  return (
    <Box sx={{ mb: 10 }}>
      <Typography
        variant="h5"
        sx={{
          mb: 4,
          fontWeight: 600,
        }}
      >
        Explore Our Latest Arrivals
      </Typography>

      <Grid container spacing={4}>
        {products.map((product, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={index}
          >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LatestArrivals;