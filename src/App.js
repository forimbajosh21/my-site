import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import Home from "./Home";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#566473",
      main: "#2c3e50",
      dark: "#1e2b38",
      contrastText: "#fff"
    },
    secondary: {
      light: "#51b7ae",
      main: "#26a69a",
      dark: "#1a746b",
      contrastText: "#fff"
    }
  },
  status: {
    danger: "orange"
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
