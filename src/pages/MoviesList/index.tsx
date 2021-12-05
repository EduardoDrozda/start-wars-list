import React from "react";
import { MovieCard } from "./components/MovieCard";
import { IMovies } from "./interfaces/movies";
import { useMovies } from "./providers/MoviesProvider";
import { Container, List } from "./styles";

export default function MoviesList() {
  const { movies } = useMovies();

  function handleMovieSelect(movie: IMovies) {
    alert(movie.title);
  }

  function buildMoviesCard() {
    return movies?.results.map((movie, index) => (
      <MovieCard key={index} movie={movie} movieSelect={handleMovieSelect} />
    ));
  }

  return (
    <Container>
      <List>{buildMoviesCard()}</List>
    </Container>
  );
}
