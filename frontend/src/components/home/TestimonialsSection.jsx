import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";

const reviews = [
  {
    name: "Ananya",
    review:
      "Amazing quality and elegant designs. Loved the stitching.",
  },

  {
    name: "Sravani",
    review:
      "Beautiful collections and fast delivery service.",
  },

  {
    name: "Keerthana",
    review:
      "Perfect fitting and premium fabric quality.",
  },
];

const TestimonialsSection = () => {
  return (
    <Box sx={{ mb: 10 }}>
      <Typography
        variant="h5"
        sx={{
          mb: 4,
          fontWeight: 600,
          textAlign: "center",
        }}
      >
        What People Are Saying
      </Typography>

      <Grid container spacing={4}>
        {reviews.map((item, index) => (
          <Grid
            item
            xs={12}
            md={4}
            key={index}
          >
            <Card
              sx={{
                borderRadius: "18px",
                p: 2,
              }}
            >
              <CardContent>
                <Avatar
                  sx={{
                    mb: 2,
                    backgroundColor: "#D63384",
                  }}
                >
                  {item.name[0]}
                </Avatar>

                <Typography sx={{ mb: 2 }}>
                  "{item.review}"
                </Typography>

                <Typography
                  sx={{
                    fontWeight: 600,
                  }}
                >
                  {item.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TestimonialsSection;