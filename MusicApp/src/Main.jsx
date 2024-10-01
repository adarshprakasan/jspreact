import React, { useRef, useState } from "react";
import songs from "./Songs";
import "./main.css";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { FaForwardStep } from "react-icons/fa6";
import { FaBackwardStep } from "react-icons/fa6";
import { MdOutlineRestartAlt } from "react-icons/md";
import { MdOutlineLoop } from "react-icons/md";

function Main() {
  let [play, setPlay] = useState(false);
  let [currentTime, setCurrentTime] = useState(0);
  let audioRef = useRef(null);
  let [loop, setLoop] = useState(false);

  let toggleLoop = () => {
    setLoop(!loop);
  };

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

  let selectSong = (e) => {
    setCurrentSongIndex(e);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
        setPlay(true);
      }
    }, 0);
  };

  let restartSong = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      if (play) {
        audioRef.current.play();
      }
    }
  };

  let skipForwardPlayHandler = (direction) => {
    if (direction === "skip-forward") {
      setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    } else if (direction === "skip-backward") {
      setCurrentSongIndex(
        (prevIndex) => (prevIndex - 1 + songs.length) % songs.length
      );
    }
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
        setPlay(true);
      }
    }, 0);
  };

  return (
    <div className="mainBody">
      <div className="playerBody">
        <div className="player">
          <audio
            src={currentSong.src}
            ref={audioRef}
            onTimeUpdate={timeUpdateHandler}
            onEnded={() => {
              skipForwardPlayHandler("skip-forward");
            }}
            loop={loop}
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
            <button onClick={restartSong}>
              <MdOutlineRestartAlt className="buttonStyles" />
            </button>
            <button onClick={() => skipForwardPlayHandler("skip-backward")}>
              <FaBackwardStep className="buttonStyles" />
            </button>
            <button onClick={playOrPause}>
              {play ? (
                <FaPause className="mainButtonStyles" />
              ) : (
                <FaPlay className="mainButtonStyles" />
              )}
            </button>
            <button onClick={() => skipForwardPlayHandler("skip-forward")}>
              <FaForwardStep className="buttonStyles" />
            </button>
            <button onClick={toggleLoop}>
              {loop ? (
                <MdOutlineLoop className="buttonStylesActive" />
              ) : (
                <MdOutlineLoop className="buttonStyles" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="songList">
        <div className="listTitle">
          <h1>My Songs</h1>
        </div>
        {songs.map((s, index) => {
          return currentSong.title === s.title ? (
            <div className="songCardActive">
              <div className="songCardLeft">
                <h1>{s.title}</h1>&nbsp;&nbsp;
                <p>
                  <i>{s.singer}</i>
                </p>
              </div>
              <div className="songCardRight">
                <p>Now playing</p>
              </div>
            </div>
          ) : (
            <div
              className="songCard"
              onClick={() => {
                selectSong(index);
              }}
            >
              <h1>{s.title}</h1>&nbsp;&nbsp;
              <p>
                <i>{s.singer}</i>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
