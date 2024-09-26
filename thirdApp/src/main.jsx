import React, { useRef, useState } from "react";
import songs from "./Songs";
import "./main.css";
import { IoPlayCircleOutline } from "react-icons/io5";
import { FaRegCirclePause } from "react-icons/fa6";
import { IoPlaySkipBackCircleOutline } from "react-icons/io5";
import { IoPlaySkipForwardCircleOutline } from "react-icons/io5";

function Main() {
  let [play, setPlay] = useState(false);
  let [currentTime, setCurrentTime] = useState(0);
  let audioRef = useRef(null);

  let [currentSongIndex, setCurrentSongIndex] = useState(0);
  let currentSong = songs[currentSongIndex];

  let playOrPause = () => {
    if (play) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlay(!play);
  };

  let timeUpdateHandler = (e) => {
    setCurrentTime(e.target.currentTime);
  };

  let dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };

  let skipForwardPlayHandler = (direction) => {
    if (direction === "skip-forward") {
      setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    } else if (direction === "skip-backward") {
      setCurrentSongIndex(
        (prevIndex) => (prevIndex - 1 + songs.length) % songs.length
      );
    }
  };

  return (
    <div className="mainBody">
      <div className="player">
        <audio
          src={currentSong.src}
          ref={audioRef}
          onTimeUpdate={timeUpdateHandler}
          onEnded={() => {
            skipForwardPlayHandler("skip-forward");
          }}
        ></audio>

        <div className="cover">
          <img src={currentSong.cover} alt="" />
        </div>

        <div className="songTitle">
          <h1>{currentSong.title}</h1>
        </div>

        <div>
          <input
            type="range"
            value={currentTime}
            max={audioRef.current ? audioRef.current.duration : 0}
            onChange={dragHandler}
          />
        </div>

        <div className="controls">
          <button onClick={() => skipForwardPlayHandler("skip-backward")}>
            <IoPlaySkipBackCircleOutline className="buttonStyles" />
          </button>
          <button onClick={playOrPause}>
            {play ? (
              <FaRegCirclePause className="mainButtonStyles" />
            ) : (
              <IoPlayCircleOutline className="mainButtonStyles" />
            )}
          </button>
          <button onClick={() => skipForwardPlayHandler("skip-forward")}>
            <IoPlaySkipForwardCircleOutline className="buttonStyles" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
