import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0128ff",
    },
    secondary: {
      main: "#FF00FF",
    },
    background: {
      default: "#FFFFFF",
    },
    text: {
      primary: "#000000",
    },
  },
  typography: {
    fontFamily: '"Arial", sans-serif',
    h4: {
      fontWeight: 700,
      letterSpacing: "0.1em",
    },
    h5: {
      fontWeight: 700,
      letterSpacing: "0.1em",
    },
    body1: {
      fontWeight: 400,
      letterSpacing: "0.05em",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          color: "black",
          border: "solid 1px black",
          borderBottom: "solid 3px black",
          borderRadius: 3,
          transition: "all .1s ease-out;",
          boxShadow: "none",
          "&:hover": {
            border: "solid 1px black",
            borderBottom: "solid 8px black",
            borderRadius: 3,
            transition: "all .1s ease-out;",
            boxShadow: "none",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          border: "solid 1px black",
          borderBottom: "solid 6px black",
          boxShadow: "none",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          border: "solid 1px black",
          borderBottom: "solid 3px black",
          borderRadius: 1,
          transition: "all .1s ease-out;",
          backgroundColor: "white",

          "&:hover": {
            border: "solid 1px black",
            borderBottom: "solid 8px black",
            borderRadius: 1,
            transition: "all .1s ease-out;",
            backgroundColor: "white",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          borderRadius: 3,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "black",
            },
            "&:hover fieldset": {
              borderColor: "black",
            },
            "&.Mui-focused fieldset": {
              borderColor: "black",
            },
          },
        },
      },
    },
  },
});

export default theme;
