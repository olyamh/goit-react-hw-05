 import React, { useState } from "react";
 import s from "./SearchBar.module.css"
import clsx from "clsx";

const SearchBar = ({ handleSetQuery }) => {
  const [query, setQuery] = useState('');

  const handleQuery = (e) => {
    setQuery(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      return alert("Please enter a query");
    }
    handleSetQuery(query);
    console.log('query', query);
    setQuery('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search movie" value={query} onChange={handleQuery} />
        <button className={clsx(s.button)} type="submit">Search Movie</button>
      </form>
    </div>
  )
}

export default SearchBar;