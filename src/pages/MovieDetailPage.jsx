import { useEffect,  useState } from "react";
import { Link, Outlet,  useParams } from "react-router-dom";
import { searchMovieById } from "../service/api";
import BackButton from "../components/backButton/BackButton";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  console.log(useParams);
  const [singleMovie, setSingleMovie] = useState(null);

useEffect(() => {
    if (!movieId) {
      return;
    }
    const getMovieData = async () => {
      try {
        const { data } = await searchMovieById(movieId);
        setSingleMovie(data);
      } catch (error) {
        alert(error.message);
      }
    };

    getMovieData();
  }, [movieId]);

  console.log(singleMovie);

  if (!singleMovie) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <BackButton /> 
         <h2>
        {singleMovie.title}({singleMovie.release_date})
      </h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${singleMovie.poster_path}`}
        width={400}
        height={600}
      />
      <p>User Score {singleMovie.vote_average}</p>
      <p>Genres: {singleMovie.genres.map((genre) => genre.name).join(", ")}</p>
     
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>

      <Outlet />
    </div>
  );
};

export default MovieDetailPage;
