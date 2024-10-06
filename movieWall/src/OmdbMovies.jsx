import axios from "axios";
import React, { useEffect, useState } from "react";
import "./OmdbMovies.css";
import Loader from "./Loader";
import noImg from "./noImg.png";

function OmdbMovies() {
  let [movies, setmovies] = useState([]);
  let [search, setsearch] = useState("");
  let [searchedMovie, setsearchedMovie] = useState("avengers");
  let [loading, setloading] = useState(false);
  let [error, seterror] = useState(false);

  let updateUsers = async () => {
    setloading(true);
    try {
      let {
        data: { Search },
      } = await axios.get(
        `https://www.omdbapi.com/?s=${searchedMovie}&apikey=428f8624`
      );

      setmovies(Search);
      setloading(false);
    } catch (err) {
      console.log(err);
      seterror(true);
      setloading(false);
    }
  };

  let updateSearch = ({ target: { value } }) => {
    setsearch(value);
  };

  useEffect(() => {
    updateUsers();
  }, [searchedMovie]);

  console.log(movies);

  let searchMovie = () => {
    setsearchedMovie(search);
  };

  return (
    <div className="omdb">
      <div className="search">
        <input type="search" placeholder="Movie Name" onChange={updateSearch} />
        <button onClick={searchMovie}>Search</button>
      </div>
      {loading && <Loader />}
      {error && <h1 style={{ color: "Red", fontSize: "20px" }}>API Error</h1>}
      <div className="movie-list">
        {movies ? (
          movies?.map((movie) => {
            return (
              <div key={movie.imdbID} className="movieCard">
                <div className="movieImg">
                  <img
                    src={movie.Poster === "N/A" ? noImg : movie.Poster}
                    alt="No Img"
                  />
                </div>
                <div className="movieDetails">
                  <h1>{movie.Title}</h1>
                  <i>{movie.Type}</i>
                </div>
              </div>
            );
          })
        ) : (
          <h1 style={{ color: "white", fontSize: "18px" }}>No Movie Found</h1>
        )}
      </div>
    </div>
  );
}

export default OmdbMovies;
