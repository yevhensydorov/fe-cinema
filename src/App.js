import React from "react";
import { Search } from "./features/search/Search";
import { useSelector } from "react-redux";

function App() {
  const products = useSelector((state) => state.searchReducer.movies);

  return (
    <div className="App">
      <header className="App-header">
        <Search />
      </header>
    </div>
  );
}

export default App;
