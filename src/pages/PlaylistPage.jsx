import MoviePlaylist from "../components/MoviePlaylist";
import SongPlaylist from "../components/SongPlaylist";
import "../store"
import "../main.css";
function PlaylistPage () {
    return (
        <div className="container is-fluid">
          <button  className="button is-danger">
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