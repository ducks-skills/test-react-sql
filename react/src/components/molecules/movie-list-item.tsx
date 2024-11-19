import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { FC, MouseEventHandler } from "react";
import { ApiMovie } from "../../types/api/movie";
import { BorderTop } from "@mui/icons-material";

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
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : process.env.REACT_APP_POSTER
            }
          />
        </ListItemAvatar>
        <ListItemText primary={movie.title} />
      </ListItemButton>
    </ListItem>
  );
};

export default MovieListItem;
