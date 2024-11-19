import { useCallback, useEffect, useState } from "react";
import { ApiMovie } from "../../types/api/movie";
import QueryString from "qs";

const useMovieSearchPage = () => {
  const [movies, setMovies] = useState<ApiMovie[]>([]);
  const [query, setQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState<ApiMovie | null>(null);

  useEffect(() => {
    if (query === "" || query.length > 3) fetchMovies();
  }, [query]);

  const fetchMovies = useCallback(async () => {
    try {
      const params = QueryString.stringify({
        api_key: process.env.REACT_APP_API_KEY,
        query,
      });
      const rawResponse = await fetch(
        `${process.env.REACT_APP_BASE_API_URL}/search/movie?${params}`
      );
      const response = await rawResponse.json();
      setMovies(response.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }, [query]);

  const handleQueryChange = (query: string) => {
    setQuery(query);
  };

  const handleMovieSelection = (movie: ApiMovie) => {
    setSelectedMovie(movie);
  };

  return {
    movies,
    handleQueryChange,
    handleMovieSelection,
    query,
    selectedMovie,
  };
};

export default useMovieSearchPage;
