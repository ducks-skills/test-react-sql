import {
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { FC, MouseEventHandler } from "react";
import { ApiMovie } from "../../types/api/movie";
import { getPosterPath } from "../utils/get-poster-path";

interface MovieListItemProps {
  movie: ApiMovie;
  onSelectMovie: MouseEventHandler<HTMLDivElement>;
}
const MovieListItem: FC<MovieListItemProps> = ({ movie, onSelectMovie }) => {
  return (
    <ListItem>
      <ListItemButton onClick={onSelectMovie}>
        <ListItemAvatar>
          <img
            alt={movie.title}
            height={"65px"}
            src={getPosterPath(movie?.poster_path)}
          />
        </ListItemAvatar>
        <ListItemText primary={movie.title} />
      </ListItemButton>
    </ListItem>
  );
};

export default MovieListItem;
