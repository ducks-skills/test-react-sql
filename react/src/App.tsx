import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import MovieSearchPage from "./pages/movie-search-page";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MovieSearchPage />
    </ThemeProvider>
  );
};

export default App;
