import "./index.css";

export const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#110C3A",
      contrastText: "#FFF",
    },
    secondary: {
      main: "#67264C",
      contrastText: "#FFF",
    },
  },
  typography: {
    fontFamily: [
      "Ubuntu",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    caption: {
      fontSize: "1rem",
    },
    h1: {
      fontSize: "2rem",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    h3: {
      fontSize: "1.1rem",
      fontWeight: "bold",
    },
    h6: {
      fontSize: "1.2rem",
    },
    button: {
      textTransform: "none",
      fontSize: "1rem",
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          borderRadius: "10px",
          border: "2px solid",
          borderColor: "#bdbdbd",
        },
      },
    },
  },
};
