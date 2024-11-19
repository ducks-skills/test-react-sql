export const getPosterPath = (poster_path?: string) =>
  poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : process.env.REACT_APP_POSTER;
