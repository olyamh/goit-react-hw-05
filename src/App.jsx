import "./App.css";
import Navigation from "./Navigation";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import MovieCast from "./components/movieCast/MovieCast";
import MovieReviews from "./components/movieReviews/MovieReviews";

function App() {
  return (
    <main>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />

        <Route path="/movies/:movieId" element={<MovieDetailPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
