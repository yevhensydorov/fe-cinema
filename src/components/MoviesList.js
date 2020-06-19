import React from "react";

export function MoviesList({ movies }) {
  const renderMovies = () => {
    return movies.map((movie) => {
      return <li key={movie.imdbID}>{movie.Title}</li>;
    });
  };
  return (
    <>
      <p>Movies list:</p>
      <ul>{renderMovies()}</ul>
    </>
  );
}
