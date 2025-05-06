import { configureStore } from "@reduxjs/toolkit";
import { movieReducer, addMovie, removeMovie } from "./slices/movieSlice";
import { songReducer, addSong, removeSong } from "./slices/songSlice";
import { reset } from "./actions";

const store = configureStore({
  reducer: {
    songs: songReducer,
    movies: movieReducer
  },
});

export {store, reset, addMovie, removeMovie, addSong, removeSong}


