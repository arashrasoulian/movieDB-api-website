import React, { useEffect, useState } from "react";

export function Youtube({ show, movieID, onClose }) {
  const key = "1cf50e6248dc270629e802686245c2c8";
  const SAMPLE = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${key}&append_to_response=videos`;

  const [showmodal, setShowmodal] = useState(true);
  const [movieData, setMoviedata] = useState("");

  useEffect(() => {
    fetch(SAMPLE)
      .then((data) => data.json())

      .then((data) => setMoviedata(data.videos.results[0].key));
  }, [SAMPLE]);

  console.log(movieData);

  function close() {
    setShowmodal(false);
    show = false
  }
  // useEffect(() => {
  //   setShowmodal(true);
  // }, [show]);

  console.log(show, showmodal, movieID);
  return (
    <div
      className="modal_container"
      style={{ display: show  ? "block" : "none" }}
    >
      <div className="modal">
        <button className="close-modal" onClick={onClose}>
          x
        </button>
        <iframe
        className="movie-modal"
          title="ali"
          src={`https://www.youtube.com/embed/${movieData}`}
        ></iframe>
      </div>
    </div>
  );
}
