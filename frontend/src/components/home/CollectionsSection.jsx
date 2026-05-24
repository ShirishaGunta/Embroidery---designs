import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
} from "@mui/material";

const collections = [
  {
    title: "Sarees",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  },

  {
    title: "Jewellery",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638",
  },

  {
    title: "Festive Wear",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
  },
];

const CollectionsSection = () => {
  return (
    <Box sx={{ mb: 10 }}>
      <Typography
        variant="h5"
        sx={{
          mb: 4,
          fontWeight: 600,
        }}
      >
        Collections
      </Typography>

      <Grid container spacing={4}>
        {collections.map((item, index) => (
          <Grid
            item
            xs={12}
            md={4}
            key={index}
          >
            <Card
              sx={{
                borderRadius: "18px",
                overflow: "hidden",
              }}
            >
              <CardMedia
                component="img"
                height="320"
                image={item.image}
                alt={item.title}
              />

              <Box
                sx={{
                  p: 2,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CollectionsSection;