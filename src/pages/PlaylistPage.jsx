
import MoviePlaylist from "../components/MoviePlaylist";
import SongPlaylist from "../components/SongPlaylist";
import "../store"
import {reset} from '../store'
import { useDispatch } from "react-redux";
import "../main.css";
import { useEffect } from "react";
function PlaylistPage () {
  const dispatch = useDispatch()

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link); // Clean up when navigating away
    };
  }, []);

  const handleClick = () => {
    dispatch(reset())
  }
    return (
        <div className="container is-fluid">
          <button onClick={handleClick}  className="button is-danger">
            Reset Both Playlists
          </button>
          <hr />
          <MoviePlaylist />
          <hr />
          <SongPlaylist />
        </div>
      );
}

export default PlaylistPage