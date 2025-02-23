import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import HomePage from "./pages/HomePage.jsx"
import NotFoundPage from "./pages/NotFoundPage"

const MovieCast = lazy(() => import('./components/movieCast/MovieCast'));
const MovieReviews = lazy(() => import('./components/movieReviews/MovieReviews'));
const MovieDetailPage = lazy(() => import('./components/movieDetailsPage/MovieDetailPage.jsx'));
const MoviesPage = lazy(() => import('./pages/MoviesPage.jsx'))


function App() {
  return (
    <main>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
    
          <Route path="/movies/:movieId" element={<MovieDetailPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </main>
  );
}

export default App;