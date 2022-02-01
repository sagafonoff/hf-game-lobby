import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import App from "./app/App";
import { ApiProvider } from "./services/api/ApiProvider";

const theme = createTheme();

ReactDOM.render(
  <React.StrictMode>
    <StyledThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ApiProvider>
          <App />
        </ApiProvider>
      </ThemeProvider>
    </StyledThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
