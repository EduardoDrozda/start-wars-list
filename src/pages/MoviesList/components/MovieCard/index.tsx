import React from "react";

import {
  Container,
  MovieCover,
  MovieCoverWrapper,
  MovieNameWrapper,
  MovieName,
} from "./styles";
import popcorn from "../../../../assets/img/popcorn.png";
import { IMovies } from "../../interfaces/movies";

interface MovieCardProps {
  movie: IMovies;
  movieSelect: (movie: IMovies) => void;
}

export function MovieCard({ movie, movieSelect }: MovieCardProps) {
  return (
    <Container onClick={() => movieSelect(movie)}>
      <MovieCoverWrapper>
        <MovieCover src={popcorn} />
      </MovieCoverWrapper>
      <MovieNameWrapper>
        <MovieName>{movie.title}</MovieName>
      </MovieNameWrapper>
    </Container>
  );
}
