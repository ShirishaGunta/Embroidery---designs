import { Box, Container } from "@mui/material";

import Navbar from "../../components/layouts/Navbar";
import HeroSection from "../../components/common/HeroSection";
import CategoriesSection from "../../components/home/CategoriesSection";
import LatestArrivals from "../../components/home/LatestArrivals";
import BestSellingSection from "../../components/home/BestSellingSection";
import TestimonialsSection from "../../components/home/TestimonialsSection";
import CollectionsSection from "../../components/home/CollectionsSection";
import Footer from "../../components/layouts/Footer";

const HomePage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFF9FB",
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Hero Banner */}
      <HeroSection />

      {/* Main Content */}
      <Container
        maxWidth="xl"
        sx={{
          mt: 6,
          mb: 8,
        }}
      >
        {/* Categories */}
        <CategoriesSection />

        {/* Latest Arrivals */}
        <LatestArrivals />

        {/* Best Selling */}
        <BestSellingSection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Collections */}
        <CollectionsSection />
      </Container>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default HomePage;