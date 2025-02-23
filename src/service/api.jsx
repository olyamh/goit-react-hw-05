import axios from "axios";


const BASE_URL = 'https://api.themoviedb.org/3';
const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzI4ZDNiODc4MDg4MmM4ZGViMmYzZjBmZmRmMGM5YiIsIm5iZiI6MTczOTcxMDczNy44NDUsInN1YiI6IjY3YjFlMTExNmE2ODllYWRjMDZkYzI2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.srZUWjZ-pWR3a5fdgaKod7oM3C5AwUBox_Tx_CkKyzU'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${TOKEN}`
  }
};

export const fetchMovies = async () => {
const {data} =  await axios.get(`${BASE_URL}/trending/movie/day?language=en-US`, options); 

return data.results;
}

export  const  searchMovies = async(query) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: { query },
    headers: options.headers
});
return response;
}


export const searchMovieById = async (id) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}`, {
    headers: options.headers
  });
  return response;
}

export const fetchMovieReview = async (id) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}/reviews`, {
    headers: options.headers
  });
  console.log(response.results)
  return response;
}


export const fetchCasts = async (id) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}/credits`, {
    headers: options.headers
  });
  console.log(response.results)
  return response;
}

// export const fetchMoviesByQuery = async (query) => { 
//   return axios.get(`search/movie?query=${query}&include_adult=false&language=en-US&page=1`);
  // const {data} = await axios.get(`${BASE_URL}/search/movie?query=${query}&language=en-US&page=1`, options); 
  // return data.results; 
// }; 
//   export const fetchMovies = async (url, options) => {
//     const { data } = await axios.get(url, options);
//     return data;
//   };