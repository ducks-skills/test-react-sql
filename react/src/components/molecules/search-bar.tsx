import React, { FC, useContext } from "react";
import { TextField, Button, Box } from "@mui/material";
import MoviesContext from "../../contexts/movies-context";

const SearchBar: FC = () => {
  const { handleQueryChange, query } = useContext(MoviesContext);

  return (
    <Box
      component="form"
      sx={{ display: "flex", alignItems: "center", backgroundColor: "primary" }}
    >
      <TextField
        value={query}
        onChange={(e) => handleQueryChange(e.target.value)}
        placeholder="Search for a movie..."
        sx={{ flex: 1, py: 0 }}
      />
      <Button size="large" sx={{ ml: 2 }}>
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
