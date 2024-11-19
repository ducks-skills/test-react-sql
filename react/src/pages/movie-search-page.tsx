import useMovieSearch from "./hooks/use-movie-search-page";
import MoviesContext from "../contexts/movies-context";
import MovieSearch from "../components/organisms/movie-search";

const MovieSearchPage = () => {
  const {
    handleQueryChange,
    handleMovieSelection,
    movies,
    query,
    selectedMovie,
  } = useMovieSearch();

  return (
    <MoviesContext.Provider
      value={{
        handleQueryChange,
        handleMovieSelection,
        movies,
        query,
        selectedMovie,
      }}
    >
      <MovieSearch />
    </MoviesContext.Provider>
  );
};

export default MovieSearchPage;
