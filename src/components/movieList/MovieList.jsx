import { Link, useLocation } from "react-router-dom";

const MovieCard = ({ movies, isLoading }) => {
  const location = useLocation();

  if (!movies) {
    return <></>;
  }
  if (isLoading){
    return <p>Loading ...</p>
  }
  

  const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";
  return (
    <>
 
     {movies.length >0 ? 
      <ul>
        {movies.map((item) => (
          <li key={item.id}>
            <div>
              <h2>{item.title}</h2>
              <Link to={`/movies/${item.id}`} state={{ from: location }}>
                <img
                  src={
                    item.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                      : defaultImg
                  }
                  width={250}
                  alt={`poster: ${item.title}`}
                />
              </Link>{" "}
            </div>
          </li>
        ))}
      </ul> :
      <p>No movies for this request</p>}
    </>
  );
};

export default MovieCard;
