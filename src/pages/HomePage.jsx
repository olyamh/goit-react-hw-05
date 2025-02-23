import { useEffect, useState } from "react";
import { fetchMovies } from "../service/api";
import MovieCard from "../components/movieList/MovieList";
// import Loader from "../components/loader/Loader";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
setIsLoading(true);

    const getData = async () => {
      try {
        const data = await fetchMovies();

        setMovies(data);
        setIsLoading(false)
      } catch (error) {
        alert("An error occurred while fetching data", error);
      }
    };
    getData();
  }, []);

  return (<div>
  <MovieCard movies={movies} isLoading={isLoading}/>
    </div>);
};
export default HomePage;
