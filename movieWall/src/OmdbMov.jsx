import React, { useEffect, useReducer } from "react";
import axios from "axios";
import "./OmdbMovies.css";
import Loader from "./Loader";
import noImg from "./noImg.png";

function OmdbMovies() {
  let initialState = {
    movies: [],
    searchedMovie: "Avengers",
    loading: false,
    error: false,
  };

  let movieReducer = (state, action) => {
    switch (action.type) {
      case "MOVIES":
        return {
          ...state,
          movies: action.newdata,
          loading: false,
          error: false,
        };
      case "LOADING":
        return { ...state, loading: true };
      case "ERROR":
        return { ...state, error: true, loading: false };
      case "SEARCH_MOVIE":
        return { ...state, searchedMovie: action.newdata };
      default:
        return state;
    }
  };

  let [state, dispatch] = useReducer(movieReducer, initialState);

  let fetchMovies = async () => {
    if (!state.searchedMovie.trim()) {
      dispatch({ type: "MOVIES", newdata: [] });
      return;
    }

    try {
      dispatch({ type: "LOADING" });
      let { data } = await axios.get(
        `https://www.omdbapi.com/?s=${state.searchedMovie}&apikey=428f8624`
      );

      if (data.Response === "True") {
        dispatch({ type: "MOVIES", newdata: data.Search });
      } else {
        dispatch({ type: "MOVIES", newdata: [] });
      }
    } catch {
      dispatch({ type: "ERROR" });
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [state.searchedMovie]);

  return (
    <div className="omdb">
      <div className="search">
        <input
          type="text"
          onChange={(e) => {
            let value = e.target.value;
            if (value.trim() === "") {
              dispatch({ type: "SEARCH_MOVIE", newdata: "Avengers" });
            } else {
              dispatch({ type: "SEARCH_MOVIE", newdata: value });
            }
          }}
          placeholder="Search for a movie"
        />
        <button onClick={fetchMovies}>Search</button>
      </div>
      {state.loading && <Loader />}
      {state.error && (
        <h1 style={{ color: "Red", fontSize: "20px" }}>API Error</h1>
      )}
      <div className="movie-list">
        {!state.loading && state.movies.length === 0 && !state.error && (
          <h1 style={{ color: "white", fontSize: "18px" }}>No Movie Found</h1>
        )}
        {!state.loading &&
          state.movies.length > 0 &&
          state.movies.map((movie) => {
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
          })}
      </div>
    </div>
  );
}

export default OmdbMovies;
