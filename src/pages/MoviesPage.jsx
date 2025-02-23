import React, { useEffect, useState } from "react";
import { searchMovies } from "../service/api";
import SearchBar from "../components/searchBar/SearchBar";
import MovieCard from "../components/movieCard/MovieCard";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const query = searchParams.get("query") ?? "";


  useEffect(() => {
    setIsLoading(true);
    updateSearchParams("q", query);
    if (!query) {
      return;
    }

    const getData = async () => {
      try {
        const { data } = await searchMovies(query);
        setMovies(data.results);
        setIsLoading(false)
      } catch (error) {
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
      <MovieCard movies={movies} query={query} />
    </>
  );
};

export default MoviesPage;
