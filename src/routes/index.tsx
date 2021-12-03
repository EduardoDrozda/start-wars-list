import React, { Suspense } from "react";

import { Routes as BrowserRoutes, Route, Navigate } from "react-router-dom";

const MoviesList = React.lazy(() => import("../pages/MoviesList"));

export function Routes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRoutes>
        <Route path="/" element={<Navigate replace to="/movies" />} />
        <Route path="/movies" element={<MoviesList />} />
      </BrowserRoutes>
    </Suspense>
  );
}
