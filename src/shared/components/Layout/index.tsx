import React from "react";
import { Header } from "../Header";
import { Main } from "./styles";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};
