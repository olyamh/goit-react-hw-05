import { useParams } from "react-router-dom";
import { fetchCasts } from "../../service/api";
import { useEffect, useState } from "react";

const MovieCast =() =>{
    const {movieId} =useParams();
    const [movieCast, setMovieCast] = useState(null);
  console.log(movieId)
    useEffect(() =>{
      if(!movieId){
          return;
      }
      const getMovieCasts = async() =>{
          try{
              // console.log(movieId)
              const {data} =await fetchCasts(movieId);
              setMovieCast(data.cast);
              // console.log('review', data)
          }catch(error){
              alert(error.message)
          }
      };
      getMovieCasts();
  
    }, [movieId]);
  
    if(!movieCast){
      return<p>Loading...</p>
    }
  
    
    console.log('casts', movieCast)
  
    const defaultImg =  "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

      return (
          <>
          <p>Movie Casts</p>
        {movieCast.length>0 ? <div>{movieCast.map((item) => 
      <ul key={item.id}>
          <li>
              <p>{item.name}</p>
              <img
    src={
      item.profile_path
        ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
        : defaultImg
    }
    width={250}
    alt={`image of: ${item.name}`}
  />
          </li>
      </ul>
      )}</div> : <p>No credits have added yet</p>}
         
          </>
      )
  
  }


export default MovieCast;