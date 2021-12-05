import React, { createContext, useContext, useState } from "react";

interface LoadingProviderProps {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

const LoadingContext = createContext<LoadingProviderProps>(
  {} as LoadingProviderProps
);

const LoadingProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

function useLoading() {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error(
      "context not found. Remember, useMovies must be used within an LoadingProvider."
    );
  }
  return context;
}

export { LoadingProvider, LoadingContext, useLoading };
