import React, { useRef, useState } from "react";
import songs from "./Songs";

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
    <div>
      <audio
        src={currentSong.src}
        ref={audioRef}
        onTimeUpdate={timeUpdateHandler}
        onEnded={() => {
          skipForwardPlayHandler("skip-forward");
        }}
      ></audio>

      <h1>Title: {currentSong.title}</h1>

      <div>
        <input
          type="range"
          value={currentTime}
          max={audioRef.current ? audioRef.current.duration : 0}
          onChange={dragHandler}
        />
      </div>

      <div>
        <button onClick={() => skipForwardPlayHandler("skip-backward")}>
          Back
        </button>
        <button onClick={playOrPause}>{play ? "Pause" : "Play"}</button>
        <button onClick={() => skipForwardPlayHandler("skip-forward")}>
          Forward
        </button>
      </div>
    </div>
  );
}

export default Main;
