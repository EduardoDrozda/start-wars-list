import React from "react";
import { useMovies } from "./providers/MoviesProvider";
import { Container, List } from "./styles";

export default function MoviesList() {
  const { movies } = useMovies();

  return (
    <Container>
      <List></List>
    </Container>
  );
}
