import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import requests from "../api data/Api";
import movieTrailer from "movie-trailer";
import "./Banner.css";

const Banner = () => {
  const [banner, setBanner] = useState([]);
  const [bannerDisplay, setBannerDisplay] = useState("");

  const imageUrl = "https://image.tmdb.org/t/p/original/";
  const baseURL = "https://api.themoviedb.org/3";
  useEffect(() => {
    const bannerData = function () {
      fetch(`${baseURL}${requests.fetchNetflixOriginals}`)
        .then((res) => {
          console.log(res);
          if (!res.ok) throw new Error(`Banner is not comming(${res.status})`);
          return res.json();
        })
        .then((data) => {
          const moviePoster = data.results;
          // console.log(moviePoster);
          setBanner(
            moviePoster[Math.floor(Math.random() * moviePoster.length - 1)]
          );
          return moviePoster;
        })
        .catch((err) => console.log(err));
    };
    bannerData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  const handleClick = (movie) => {
    if (bannerDisplay) {
      console.log(bannerDisplay);
      setBannerDisplay("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setBannerDisplay(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(
               ${imageUrl}${banner?.backdrop_path}
           )`,
          backgroundPosition: "center-center",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {banner?.title ||
              banner?.name ||
              banner?.original_title ||
              banner?.original_name}
          </h1>
          <div className="banner__buttons">
            <button
              onClick={() => handleClick(banner)}
              className="banner__button"
            >
              Play
            </button>
          </div>
          <h1 className="banner__description">
            {truncate(banner?.overview, 150)}
          </h1>
        </div>

        <div className="banner--fadeBottom" />
      </header>
      {bannerDisplay && <YouTube videoId={bannerDisplay} opts={opts} />}
    </div>
  );
};

export default Banner;
