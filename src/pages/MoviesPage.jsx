import React, { useEffect, useState } from "react";
import { searchMovies } from "../service/api";
import SearchBar from "../components/searchBar/SearchBar";
import MovieList from "../components/movieList/MovieList";
import { useSearchParams } from "react-router-dom";
import ErrorMessage from "../components/errorMessage/ErrorMessage";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] =useState(false);
  const query = searchParams.get("query") ?? "";


  useEffect(() => {
   
    updateSearchParams('query', query);
    if (!query) {
      return;
    }

    const getData = async () => {
      try {
        setIsLoading(true);
        const { data } = await searchMovies(query);
        setMovies(data.results);
        setIsLoading(false);
        setIsError(false);
      } catch (error) {
        setIsError(true);
        alert("An error occurred while fetching data", error);
      }
    };

    getData();
  }, [query]);

  const updateSearchParams = (key, value) => {
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.set(key, value);
    setSearchParams(updatedParams);
  };

  const handleChangeQuery = (value) => {
    searchParams.set("query", value);

    setSearchParams(searchParams);
  };

  return (
    <>
      <SearchBar handleSetQuery={handleChangeQuery} />
    {!query ? <></> : <MovieList movies={movies} query={query} />}
      {isLoading ?? <p>Loading ...</p>}
      {isError && <ErrorMessage />}
        </>
  );
};

export default MoviesPage;
