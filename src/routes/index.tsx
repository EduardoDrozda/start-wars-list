import React from "react";

import {
  BrowserRouter,
  Routes as BrowserRoutes,
  Route,
  Navigate,
} from "react-router-dom";
import { MoviesList } from "../pages/MoviesList";

export function Routes() {
  return (
    <BrowserRouter>
      <BrowserRoutes>
        <Route path="/" element={<Navigate replace to="/movies" />} />
        <Route path="/movies" element={<MoviesList />} />
      </BrowserRoutes>
    </BrowserRouter>
  );
}
