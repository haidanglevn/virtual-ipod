import { create } from "zustand";

const useMusicPlayerStore = create((set, get) => ({
  isPlaying: false,
  currentTrackIndex: 0,
  tracks: [],
  repeat: false,
  shuffle: false,
  audio: new Audio(),

  initAudio: () => {
    const { audio } = get();
    audio.addEventListener("ended", get().handleTrackEnd);
    set({ audio });
  },

  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentTrackIndex: (index) => {
    set({ currentTrackIndex: index });
    get().setAudioSource(index);
  },
  setTracks: (tracks) => set({ tracks }),
  setRepeat: (repeat) => set({ repeat }),
  setShuffle: (shuffle) => set({ shuffle }),

  setAudioSource: (index) => {
    const { tracks, audio } = get();
    if (tracks[index]) {
      const file = tracks[index];
      audio.src = URL.createObjectURL(file);
      audio.onloadeddata = () => {
        audio.play();
        set({ isPlaying: true });
      };
      audio.onerror = () => {
        console.error("Error loading audio");
      };
    }
  },

  handlePlayPause: () => {
    const { isPlaying, audio } = get();
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    set({ isPlaying: !isPlaying });
  },

  handleNext: () => {
    const { shuffle, currentTrackIndex, tracks } = get();
    if (shuffle) {
      get().playRandomTrack();
    } else {
      const newIndex = (currentTrackIndex + 1) % tracks.length;
      get().setCurrentTrackIndex(newIndex);
    }
  },

  handlePrev: () => {
    const { shuffle, currentTrackIndex, tracks } = get();
    if (shuffle) {
      get().playRandomTrack();
    } else {
      const newIndex =
        currentTrackIndex === 0 ? tracks.length - 1 : currentTrackIndex - 1;
      get().setCurrentTrackIndex(newIndex);
    }
  },

  handleTrackEnd: () => {
    const { repeat, currentTrackIndex } = get();
    if (repeat) {
      get().setAudioSource(currentTrackIndex);
    } else {
      get().handleNext();
    }
  },

  playRandomTrack: () => {
    const { tracks, currentTrackIndex } = get();
    let randomIndex = Math.floor(Math.random() * tracks.length);
    while (randomIndex === currentTrackIndex && tracks.length > 1) {
      randomIndex = Math.floor(Math.random() * tracks.length);
    }
    get().setCurrentTrackIndex(randomIndex);
  },
}));

export default useMusicPlayerStore;
