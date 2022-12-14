import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_KEYS } from "../constants/constants";

export default function MovieDetails() {
  const { imdbID } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${API_KEYS.API_URL}movies/${imdbID}`);
      setData(result.data);
    };

    fetchData();
  }, [imdbID]);

  if (!data) {
    return <h1>Can't fetch the data</h1>;
  }

  return (
    <section>
      <h1>
        {data.title}({data.year})
      </h1>
      <img src={data.poster} alt="movie poster" />
      <p>
        <b>Plot:</b> {data.plot}
      </p>
      <p>
        <b>Date released:</b> {data.released}
      </p>
      <p>
        <b>Length:</b> {data.runtime}
      </p>
      <p>
        <b>Genre:</b> {data.genre}
      </p>
      <p>
        <b>Director:</b> {data.director}
      </p>
      <p>
        <b>Actors:</b> {data.actors}
      </p>
      {data && data.ratings && (
        <p>
          <b>Rating value:</b> {data.ratings[0].value} by{" "}
          {data.ratings[0].source}
        </p>
      )}
    </section>
  );
}
