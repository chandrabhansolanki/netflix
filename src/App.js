import React from "react";
import "./App.css";
import AllMovie from "./components/TrendingMovies/AllMovie";
import Banner from "./components/TrendingMovies/Banner";

function App() {
  // console.log("data", requests.fetchActionMovies);
  return (
    <div>
      <Banner />
      <AllMovie />
    </div>
  );
}

export default App;
