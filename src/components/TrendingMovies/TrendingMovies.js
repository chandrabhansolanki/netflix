import React, { useState, useEffect } from "react";

import "./TrendingMovie.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";
const TrendingMovies = (props) => {
  const [movie, setMovie] = useState([]);

  // const API_KEY = "227ca934a62db96cb264d35e3ba7fce1";
  const baseURL = "https://api.themoviedb.org/3";

  useEffect(() => {
    const NetflixData = function () {
      // console.log(props);
      fetch(`${baseURL}${props.fetchUrl}`)
        .then((response) => {
          console.log(response);
          if (!response.ok)
            throw new Error(`data not found (${response.status})`);
          return response.json();
        })
        .then((data) => {
          const trending = data.results;
          console.log(trending);
          setMovie(trending);
        })
        .catch((error) => console.log(error.message));
    };
    NetflixData();
  }, [props.fetchUrl]);

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="row__posters">
        {movie?.map((movies) => (
          <img
            key={movies.id}
            className={`row__poster  ${
              props.isLargeRow && "row__posterLarge"
            } `}
            src={`${baseUrl}${
              props.isLargeRow ? movies?.poster_path : movies?.backdrop_path
            }`}
            alt={movies.name}
          />
        ))}
      </div>
    </div>
  );
};
export default TrendingMovies;
