import React, { useEffect, useState } from "react";
import {  Trailerscard } from "../component/Cards";

export function Trailers() {
  const API_KEY = "api_key=1cf50e6248dc270629e802686245c2c8";

  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL_Trailers =
    BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
  const test = `https://api.themoviedb.org/3/movie/upcoming?${API_KEY}&append_to_response=videos`;

  const [movieTrailers, setMovietrailers] = useState([]);

  useEffect(() => {
    fetch(test)
      .then((data) => data.json())
      .then((data) => setMovietrailers(data.results));
  }, [API_URL_Trailers]);

  return (
    <div className=" container home-body">
      <div className="titles">upcoming</div>
      <div className="card-total-horizental">
        {movieTrailers.map((item, index) => {
          return (
            <div className="my-3">
              <Trailerscard
                key={index}
                movieId={item.id}
                backdrop_path={item.backdrop_path}
                title={item.title}
                vote_average={item.vote_average}
                vote_count={item.vote_count}
                release_date={item.release_date}
                overview={item.overview}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
