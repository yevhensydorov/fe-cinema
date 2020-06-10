import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "./searchSlice";

export function Search() {
  const dispatch = useDispatch();
  const [movieName, setMovieName] = useState("");

  return (
    <div>
      <div>
        <input
          aria-label="Search for movie"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
          type="text"
        />
        <button onClick={() => dispatch(fetchMovies(movieName || ""))}>
          Search
        </button>
      </div>
    </div>
  );
}
