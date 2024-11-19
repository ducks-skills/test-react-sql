import { createContext } from "react";
import { ApiMovie } from "../types/api/movie";

const MoviesContext = createContext<{
  handleQueryChange: (query: string) => void;
  handleMovieSelection: (movie: ApiMovie) => void;
  movies: ApiMovie[];
  query: string;
  selectedMovie: ApiMovie | null;
}>({
  handleQueryChange: () => {},
  handleMovieSelection: () => {},
  movies: [],
  query: "",
  selectedMovie: null,
});

export default MoviesContext;
