// theme.js
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#357af5", // blue
    },

    // other settings: error、warning
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff", // This will set it globally for all AppBars
          flexDirection: "row-reverse",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#357af5", // button background color
          color: "#ffffff", // button text color
          borderRadius: 20, // Consistently rounded corners
          padding: "8px 20px", // Uniform padding
          // fontSize: "1rem", // Standard font size
        },
        // outlined: {
        //   borderColor: "#357af5", // boarder color
        //   color: "#357af5", // text color
        //   backgroundColor: "transparent", // background color transparent
        // },
        // myOutlinedButton: {
        //   borderColor: "#357af5", // boarder color
        //   color: "#357af5", // text color
        //   backgroundColor: "transparent", // background color transparent
        // },
      },
    },
  },
});

export default theme;
