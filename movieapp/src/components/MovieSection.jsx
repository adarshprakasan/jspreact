import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/moviesection.css";
import { FaCaretSquareUp } from "react-icons/fa";
import { FaCaretSquareDown } from "react-icons/fa";

function MovieSection() {
  let [movies, setMovies] = useState([]);
  let [movInd, setMovInd] = useState(null);
  let [count, setCount] = useState([]);

  let updateMovie = async () => {
    try {
      let {
        data: { Search },
      } = await axios.get(
        `https://www.omdbapi.com/?s=avengers&apikey=428f8624`
      );
      setMovies(Search);
      setCount(new Array(Search.length).fill(0));
    } catch (err) {
      console.log(err);
    }
  };

  let isShowMore = (index) => {
    setMovInd((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    updateMovie();
  }, []);

  let incVote = (index) => {
    setCount((prevCount) => {
      let newCounts = [...prevCount];
      newCounts[index] += 1;
      return newCounts;
    });
  };

  let decVote = (index) => {
    setCount((prevCount) => {
      let newCounts = [...prevCount];
      newCounts[index] -= 1;
      return newCounts;
    });
  };

  return (
    <div className="movieList">
      {movies.map((movie, index) => (
        <div key={movie.imdbID} className="movieCard">
          <div className="vote">
            <div
              className="voteSections"
              onClick={() => {
                incVote(index);
              }}
            >
              <FaCaretSquareUp className="voteIcons" />
            </div>
            <div className="voteSections">{count[index]}</div>
            <div className="voteSections">
              <FaCaretSquareDown
                className="voteIcons"
                onClick={() => decVote(index)}
              />
            </div>
          </div>
          <div className="movieImg">
            <img src={movie.Poster} alt="No Img" />
          </div>
          <div className="movieDetails">
            <h1>{movie.Title}</h1>
            {movInd === index ? (
              <div>
                <div className="movieDesc">
                  <i>{movie.Type}</i>
                  <i>{movie.Year}</i>
                </div>
                <button onClick={() => isShowMore(index)}>Show Less</button>
              </div>
            ) : (
              <button onClick={() => isShowMore(index)}>Show More</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieSection;
