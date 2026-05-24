import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#D63384",
    },

    secondary: {
      main: "#C9A227",
    },

    background: {
      default: "#FFF9FB",
    },

    text: {
      primary: "#2D2D2D",
      secondary: "#6B7280",
    },
  },

  typography: {
    fontFamily: "Poppins, Roboto, sans-serif",

    h1: {
      fontSize: "3rem",
      fontWeight: 700,
    },

    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },

    body1: {
      fontSize: "1rem",
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 12,
  },
});

export default theme;