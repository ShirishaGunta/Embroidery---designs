import { Box, Typography, Button, Container } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: "90vh",
        backgroundImage:
         "url('src/assets/image1.jpg')",
        

        backgroundSize: "cover",
        backgroundPosition: "center",

        display: "flex",
        alignItems: "center",

        position: "relative",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2))",
        }}
      />

      <Container
        sx={{
          position: "relative",
          zIndex: 2,
          color: "#fff",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            maxWidth: "700px",
            mb: 3,
          }}
        >
          Elegant Ready-Made Blouses For Every Occasion
        </Typography>

        <Typography
          variant="h6"
          sx={{
            mb: 4,
            maxWidth: "500px",
          }}
        >
          Discover stylish designer blouses crafted with elegance,
          comfort, and premium quality fabrics.
        </Typography>

        <Button
          variant="contained"
          size="large"
          color="secondary"
          sx={{
            px: 4,
            py: 1.5,
            fontSize: "1rem",
          }}
        >
          Shop Now
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;