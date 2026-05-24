import {
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#111",
        color: "#fff",
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h4"
              sx={{
                color: "#D63384",
                fontWeight: 700,
                mb: 2,
              }}
            >
              Embroidery Designs
            </Typography>

            <Typography>
              Elegant blouse collections crafted for
              modern women with premium quality.
            </Typography>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography
              sx={{
                mb: 2,
                fontWeight: 600,
              }}
            >
              Quick Links
            </Typography>

            <Typography>Home</Typography>
            <Typography>Shop</Typography>
            <Typography>Collections</Typography>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography
              sx={{
                mb: 2,
                fontWeight: 600,
              }}
            >
              Support
            </Typography>

            <Typography>Contact</Typography>
            <Typography>Returns</Typography>
            <Typography>Shipping</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;