import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import Home from "./Home";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Raleway",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")
  },
  palette: {
    primary: {
      // light: "#566473",
      // main: "#2c3e50",
      // dark: "#1e2b38",
      // contrastText: "#fff"
      light: "#51b7ae",
      main: "#26a69a",
      dark: "#1a746b",
      contrastText: "#fff"
    },
    secondary: {
      // light: "#51b7ae",
      // main: "#26a69a",
      // dark: "#1a746b",
      // contrastText: "#fff"
      light: "#566473",
      main: "#2c3e50",
      dark: "#1e2b38",
      contrastText: "#fff"
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
