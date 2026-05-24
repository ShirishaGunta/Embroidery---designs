import {
  Box,
  Typography,
  Avatar,
  Stack,
} from "@mui/material";

const categories = [
  {
    name: "Hand Allover",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c",
  },

  {
    name: "Mirror Work",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518",
  },

  {
    name: "Kachu work",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
  },

  {
    name: "Net Design",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
  },

  {
    name: "Multipurpose",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  },

  {
    name: "Butta Design",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b",
  },
];

const CategoriesSection = () => {
  return (
    <Box sx={{ mb: 8 }}>
      <Typography
        variant="h5"
        sx={{
          mb: 4,
          fontWeight: 600,
        }}
      >
        Explore Categories
      </Typography>

      <Stack
        direction="row"
        spacing={4}
        sx={{
          overflowX: "auto",
          pb: 2,
        }}
      >
        {categories.map((item, index) => (
          <Box
            key={index}
            sx={{
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <Avatar
              src={item.image}
              sx={{
                width: 90,
                height: 90,
                margin: "auto",
                mb: 1,
                border: "3px solid #D63384",

                transition: "0.3s",

                "&:hover": {
                  transform: "scale(1.08)",
                },
              }}
            />

            <Typography
              variant="body2"
              sx={{
                fontWeight: 500,
              }}
            >
              {item.name}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default CategoriesSection;