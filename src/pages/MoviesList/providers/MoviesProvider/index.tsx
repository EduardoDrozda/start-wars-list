import { createContext, useContext, useLayoutEffect } from "react";
import { useAsync } from "../../../../shared/hooks";
import { IPagination } from "../../../../shared/interfaces";
import { IMovies } from "../../interfaces/movies";
import { getMovies } from "../../services/movies";

interface MoviesContextProps {
  movies: IPagination<IMovies>;
}

const MoviesContext = createContext<MoviesContextProps>(
  {} as MoviesContextProps
);

const MoviesProvider: React.FC = ({ children }) => {
  const { execute, value } = useAsync(getMovies, false);

  useLayoutEffect(() => {
    execute();
    
  }, [execute]);

  return (
    <MoviesContext.Provider
      value={{
        movies: value,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

function useMovies(): MoviesContextProps {
  const context = useContext(MoviesContext);

  if (!context) {
    throw new Error(
      "context not found. Remember, useMovies must be used within an MoviesProvider."
    );
  }

  return context;
}

export { MoviesProvider, MoviesContext, useMovies };
