import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchMovieReview } from "../../service/api";

const MovieReviews =() =>{
  const {movieId} =useParams();
  const [movieReview, setMovieReview] = useState([]);
console.log(movieId)
  useEffect(() =>{
    if(!movieId){
        return;
    }
    const getMovieReview = async() =>{
        try{
            // console.log(movieId)
            const {data} =await fetchMovieReview(movieId);
            setMovieReview(data.results);
            // console.log('review', data)
        }catch(error){
            alert(error.message)
        }
    };
    getMovieReview();

  }, [movieId]);

  if(!movieReview){
    return<p>Loading...</p>
  }

  
  console.log('review', movieReview)

    return (
        <>
        <p>Movie Reviews</p>
      {movieReview.length>0 ? <div>{movieReview.map((item) => 
    <ul key={item.id}>
        <li>
            <p>{item.author}</p>
            <p>{item.content}</p>
        </li>
    </ul>
    )}</div> : <p>No reviews yet</p>}
       
        </>
    )

}

export default MovieReviews