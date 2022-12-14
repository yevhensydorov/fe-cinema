import React from "react";
import { useSelector } from "react-redux";
import { MoviesList } from "./MoviesList";
import { Search } from "../features/search/Search";

function App() {
  const movies = useSelector((state) => {
    return state.searchReducer.movies.search;
  });
  const isLoading = useSelector((state) => state.searchReducer.loading);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Type to search movies</h1>
      </header>
      <section>
        <Search />
        {isLoading && <div>Loading...</div>}
        <MoviesList movies={movies} />
      </section>
    </div>
  );
}

export default App;
