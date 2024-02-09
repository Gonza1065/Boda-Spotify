import { Link } from "react-router-dom";
import "../../ComponentsCss/Playlist/Playlist.css";
export function Playlist() {
  return (
    <>
      <div className="title-playlist">
        <h1>¡Añadí tu canción favorita en nuestra playlist!</h1>
      </div>
      <div className="playlist-spotify">
        <iframe
          src="https://open.spotify.com/embed/playlist/6HhNF3CNARooIeezLRJuZz?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <div className="btn-add-song">
        <Link to="https://open.spotify.com/playlist/6HhNF3CNARooIeezLRJuZz?si=AoegLM_9ThKZ4eALSgFmTg&pi=u-pERYq9KZTvma&pt=c215553078b019ca7dcdfad026d6ecdc">
          Añadí tu tema
        </Link>
      </div>
    </>
  );
}
