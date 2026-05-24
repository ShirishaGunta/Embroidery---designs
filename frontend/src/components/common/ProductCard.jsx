import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Box,
  Button,
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Card
      sx={{
        borderRadius: "18px",
        overflow: "hidden",
        boxShadow: "0 4px 15px rgba(0,0,0,0.08)",

        transition: "0.3s",

        "&:hover": {
          transform: "translateY(-5px)",
        },
      }}
    >
      {/* Image */}
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="340"
          image={product.image}
          alt={product.name}
        />

        <IconButton
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            backgroundColor: "#fff",

            "&:hover": {
              backgroundColor: "#fff",
            },
          }}
        >
          <FavoriteBorderIcon />
        </IconButton>
      </Box>

      {/* Content */}
      <CardContent>
        <Typography
          variant="h6"
          sx={{
            fontSize: "1rem",
            fontWeight: 600,
          }}
        >
          {product.name}
        </Typography>

        <Typography
          sx={{
            color: "#D63384",
            fontWeight: 700,
            mt: 1,
          }}
        >
          ₹ {product.price}
        </Typography>

        <Button
          fullWidth
          variant="contained"
          startIcon={<ShoppingCartOutlinedIcon />}
          onClick={() => addToCart(product)}
          sx={{
            mt: 2,
            backgroundColor: "#D63384",

            "&:hover": {
              backgroundColor: "#bb2d73",
            },
          }}
        >
          Add To Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;