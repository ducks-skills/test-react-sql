import { FC, useContext } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
} from "@mui/material";
import MoviesContext from "../../contexts/movies-context";

const MovieDetails: FC = () => {
  const { selectedMovie } = useContext(MoviesContext);
  if (!selectedMovie) {
    return <Box>Select a movie to see details</Box>;
  }

  return (
    <Card
      id="movie-details"
      sx={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        image={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
        alt={selectedMovie.title}
        sx={{ flex: 1, objectFit: "contain", height: "60vh", paddingY: 3 }}
      />
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderTop: "dashed 1px black",
          overflowY: "auto",
        }}
      >
        <Box>
          <Typography variant="h4" component="div" sx={{ mb: 2 }}>
            {selectedMovie.title}
          </Typography>
          <Chip
            label={`Rating: ${selectedMovie.vote_average}`}
            color="primary"
            sx={{ mb: 2 }}
          />
          <Typography variant="body1" sx={{ mb: 2 }}>
            {selectedMovie.overview}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Release Date: {selectedMovie.release_date}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieDetails;
