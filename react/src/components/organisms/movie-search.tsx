import { Box, Container, Stack } from "@mui/material";
import SearchContainer from "../atoms/search-container";
import SearchBar from "../molecules/search-bar";
import MovieList from "../molecules/movie-list";
import MovieDetails from "../molecules/movie-details";
import { FC } from "react";

const MovieSearch: FC = () => {
  return (
    <Stack
      {...{
        alignItems: "stretch",
        direction: "row",
      }}
    >
      <SearchContainer>
        <SearchBar />
        <MovieList />
      </SearchContainer>
      <Container>
        <Box sx={{ my: 4 }}>
          <MovieDetails />
        </Box>
      </Container>
    </Stack>
  );
};

export default MovieSearch;
