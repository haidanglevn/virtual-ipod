import { useEffect, useState } from "react";
import "./App.css";
import InteractiveiPod from "./components/InteractiveIpod";
import MusicPlayer from "./components/MusicPlayer";
import useMusicPlayerStore from "./stores/useMusicPlayerStore";

function App() {
  const initAudio = useMusicPlayerStore((state) => state.initAudio);

  useEffect(() => {
    initAudio();
  }, [initAudio]);

  return (
    <div className="app">
      <div className="mediaWrapper">
        <MusicPlayer />
        <InteractiveiPod></InteractiveiPod>
      </div>
      <div>Frop</div>
    </div>
  );
}

export default App;
