import { FC, useContext } from "react";
import { List } from "@mui/material";
import MovieListItem from "./movie-list-item";
import MoviesContext from "../../contexts/movies-context";

const MovieList: FC = () => {
  const { handleMovieSelection, movies } = useContext(MoviesContext);
  return (
    <List>
      {movies.map((movie) => (
        <MovieListItem
          {...{
            key: movie.id,
            movie,
            onSelectMovie: () => handleMovieSelection(movie),
          }}
        />
      ))}
    </List>
  );
};

export default MovieList;
