import React from "react";

export default function MovieItem({ title, year, imdbId, imgUrl }) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{year}</p>
      <img src={imgUrl} alt="Movie poster" />
    </article>
  );
}
