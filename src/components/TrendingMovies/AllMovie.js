import React from "react";

import requests from "../api data/Api";
import TrendingMovies from "./TrendingMovies";

const AllMovie = () => {
  return (
    <>
      {" "}
      <TrendingMovies
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <TrendingMovies title="Trending now" fetchUrl={requests.fetchTrending} />
      <TrendingMovies title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <TrendingMovies
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <TrendingMovies
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <TrendingMovies
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <TrendingMovies
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />
      <TrendingMovies
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />
    </>
  );
};
export default AllMovie;
