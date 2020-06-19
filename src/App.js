import React from "react";
import { useSelector } from "react-redux";
import { MoviesList } from "./components/MoviesList";
import { Search } from "./features/search/Search";

function App() {
  const movies = useSelector((state) => state.searchReducer.movies.Search);
  // const isLoading = useSelector((state) => state.searchReducer.loading);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Type to search movies</h1>
        <Search />
        {movies && <MoviesList movies={movies} />}
      </header>
    </div>
  );
}

export default App;
