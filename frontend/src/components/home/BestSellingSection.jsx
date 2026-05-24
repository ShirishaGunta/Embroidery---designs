import {
  Box,
  Grid,
  Typography,
} from "@mui/material";

import ProductCard from "../common/ProductCard";

const products = [
  {
    name: "Elegant Bridal Saree",
    price: 3299,
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c",
  },

  {
    name: "Luxury Silk Saree",
    price: 4599,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  },

  {
    name: "Wedding Collection",
    price: 5299,
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
  },

  {
    name: "Traditional Saree",
    price: 2899,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
  },
];

const BestSellingSection = () => {
  return (
    <Box sx={{ mb: 10 }}>
      <Typography
        variant="h5"
        sx={{
          mb: 4,
          fontWeight: 600,
        }}
      >
        Best Selling Collections
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

export default BestSellingSection;