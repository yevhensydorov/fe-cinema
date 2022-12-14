import React from "react";
import { Link } from "react-router-dom";

import MovieItem from "./MovieItem";
import "../styles/MoviesListStyles.css";

export function MoviesList({ movies }) {
  const renderMovies = () => {
    if (!movies) {
      return <div>Empty list, try to search again</div>;
    } else {
      return movies.map((movie) => {
        return (
          <li className="movieItemWrapper" key={movie.imdbID}>
            <Link to={`/movies/${movie.imdbID}`}>
              <MovieItem
                title={movie.title}
                year={movie.year}
                imgUrl={movie.poster}
              />
            </Link>
          </li>
        );
      });
    }
  };

  return (
    <>
      <p>Movies list:</p>
      <ul className="moviesListWrapper">{renderMovies()}</ul>
    </>
  );
}
