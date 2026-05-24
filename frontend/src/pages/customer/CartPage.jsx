import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Button,
  Stack,
  Divider,
} from "@mui/material";

// import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import Navbar from "../../components/layouts/Navbar";
import Footer from "../../components/layouts/Footer";

import { useCart } from "../../context/CartContext";

const CartPage = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useCart();

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* PAGE */}
      <Box
        sx={{
          backgroundColor: "#FFF9FB",
          minHeight: "100vh",
          py: 6,
        }}
      >
        <Container maxWidth="xl">
          {/* TITLE */}
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
            Shopping Cart
          </Typography>

          {/* EMPTY CART */}
          {cartItems.length === 0 ? (
            <Box
              sx={{
                textAlign: "center",
                py: 10,
              }}
            >
              <ShoppingBagOutlinedIcon
                sx={{
                  fontSize: 90,
                  color: "#D63384",
                  mb: 2,
                }}
              />

              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                Your cart is empty
              </Typography>

              <Typography
                sx={{
                  color: "#6B7280",
                }}
              >
                Add your favorite blouses to cart.
              </Typography>
            </Box>
          ) : (
            <Grid container spacing={4}>
              {/* CART ITEMS */}
              <Grid item xs={12} md={8}>
                <Stack spacing={3}>
                  {cartItems.map((item, index) => (
                    <Card
                      key={index}
                      sx={{
                        borderRadius: "20px",
                        p: 2,

                        display: "flex",

                        flexDirection: {
                          xs: "column",
                          sm: "row",
                        },

                        gap: 3,

                        boxShadow:
                          "0 4px 15px rgba(0,0,0,0.05)",
                      }}
                    >
                      {/* IMAGE */}
                      <CardMedia
                        component="img"
                        image={item.image}
                        alt={item.name}
                        sx={{
                          width: {
                            xs: "100%",
                            sm: 180,
                          },

                          height: 220,

                          borderRadius: "16px",
                          objectFit: "cover",
                        }}
                      />

                      {/* CONTENT */}
                      <CardContent
                        sx={{
                          flex: 1,
                          p: 0,

                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box>
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 600,
                              mb: 1,

                              fontSize: {
                                xs: "1.2rem",
                                md: "1.5rem",
                              },
                            }}
                          >
                            {item.name}
                          </Typography>

                          <Typography
                            sx={{
                              color: "#D63384",
                              fontWeight: 700,
                              fontSize: "1.2rem",
                            }}
                          >
                            ₹ {item.price}
                          </Typography>
                        </Box>

                        {/* ACTIONS */}
                        <Box
                          sx={{
                            mt: 3,

                            display: "flex",
                            justifyContent:
                              "space-between",
                            alignItems: "center",

                            flexWrap: "wrap",
                            gap: 2,
                          }}
                        >
                          {/* QUANTITY */}
                          <Stack
                            direction="row"
                            spacing={1}
                            alignItems="center"
                          >
                            <IconButton
                              onClick={() =>
                                decreaseQuantity(
                                  item.name
                                )
                              }
                              sx={{
                                border:
                                  "1px solid #ddd",
                              }}
                            >
                              <RemoveIcon />
                            </IconButton>

                            <Typography
                              sx={{
                                fontWeight: 600,
                                minWidth: "20px",
                                textAlign: "center",
                              }}
                            >
                              {item.quantity}
                            </Typography>

                            <IconButton
                              onClick={() =>
                                increaseQuantity(
                                  item.name
                                )
                              }
                              sx={{
                                border:
                                  "1px solid #ddd",
                              }}
                            >
                              <AddIcon />
                            </IconButton>
                          </Stack>

                          {/* REMOVE */}
                          <Button
                            color="error"
                            startIcon={
                              <DeleteIcon />
                            }
                            onClick={() =>
                              removeFromCart(
                                item.name
                              )
                            }
                          >
                            Remove
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  ))}
                </Stack>
              </Grid>

              {/* ORDER SUMMARY */}
              <Grid item xs={12} md={4}>
                <Card
                  sx={{
                    borderRadius: "20px",
                    p: 3,

                    position: "sticky",
                    top: "100px",

                    boxShadow:
                      "0 4px 15px rgba(0,0,0,0.05)",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 3,
                    }}
                  >
                    Order Summary
                  </Typography>

                  <Stack spacing={2}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent:
                          "space-between",
                      }}
                    >
                      <Typography>
                        Subtotal
                      </Typography>

                      <Typography>
                        ₹ {totalPrice}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent:
                          "space-between",
                      }}
                    >
                      <Typography>
                        Delivery
                      </Typography>

                      <Typography>
                        Free
                      </Typography>
                    </Box>

                    <Divider />

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent:
                          "space-between",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 700,
                        }}
                      >
                        Total
                      </Typography>

                      <Typography
                        sx={{
                          fontWeight: 700,
                          color: "#D63384",
                        }}
                      >
                        ₹ {totalPrice}
                      </Typography>
                    </Box>
                  </Stack>

                  {/* CHECKOUT BUTTON */}
                  <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{
                      mt: 4,
                      py: 1.5,
                      borderRadius: "12px",

                      backgroundColor: "#D63384",

                      "&:hover": {
                        backgroundColor: "#bb2d73",
                      },
                    }}
                  >
                    Proceed To Checkout
                  </Button>
                </Card>
              </Grid>
            </Grid>
          )}
        </Container>
      </Box>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default CartPage;