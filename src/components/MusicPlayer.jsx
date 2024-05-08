import React from "react";
import "../styles/MusicPlayer.css";
import useMusicPlayerStore from "../stores/useMusicPlayerStore";

function MusicPlayer() {
  const {
    isPlaying,
    tracks,
    currentTrackIndex,
    repeat,
    shuffle,
    handlePlayPause,
    handlePrev,
    handleNext,
    setTracks,
    setCurrentTrackIndex,
  } = useMusicPlayerStore((state) => ({
    isPlaying: state.isPlaying,
    tracks: state.tracks,
    currentTrackIndex: state.currentTrackIndex,
    repeat: state.repeat,
    shuffle: state.shuffle,
    handlePlayPause: state.handlePlayPause,
    handlePrev: state.handlePrev,
    handleNext: state.handleNext,
    setTracks: state.setTracks,
    setCurrentTrackIndex: state.setCurrentTrackIndex,
  }));

  const handleLoadNewSongs = (event) => {
    const files = Array.from(event.target.files);
    setTracks(files);
    setCurrentTrackIndex(0);
  };

  return (
    <div>
      <button onClick={() => useMusicPlayerStore.setState({ repeat: !repeat })}>
        {repeat ? "Repeat On" : "Repeat Off"}
      </button>
      <button
        onClick={() => useMusicPlayerStore.setState({ shuffle: !shuffle })}
      >
        {shuffle ? "Shuffle On" : "Shuffle Off"}
      </button>
      {tracks.length > 0 ? (
        <ul className="trackList">
          {tracks.map((track, index) => (
            <li
              key={index}
              onClick={() => setCurrentTrackIndex(index)}
              className={`trackItem ${
                index === currentTrackIndex ? "currentTrack" : ""
              }`}
            >
              {track.name}
            </li>
          ))}
        </ul>
      ) : (
        <input
          type="file"
          multiple
          onChange={handleLoadNewSongs}
          accept="audio/*"
        />
      )}
    </div>
  );
}

export default MusicPlayer;
