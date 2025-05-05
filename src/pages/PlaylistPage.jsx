import MoviePlaylist from "../components/MoviePlaylist";
import SongPlaylist from "../components/SongPlaylist";
import "../store"
import {reset} from '../store'
import { useDispatch } from "react-redux";
import "../main.css";
function PlaylistPage () {
  const dispatch = useDispatch()
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