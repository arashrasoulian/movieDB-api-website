import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cardhorizental } from "./Cardhorizental";
import { Youtube } from "./Youtube";

export function Trailers() {
  const API_KEY = "api_key=1cf50e6248dc270629e802686245c2c8";

  const API_URL = `https://api.themoviedb.org/3/movie/upcoming?${API_KEY}&language=en-US&page=1`;
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL_Trailers =
    BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
  const test = `https://api.themoviedb.org/3/movie/upcoming?${API_KEY}&append_to_response=videos`;

  const [movieTrailers, setMovietrailers] = useState([]);
  const [showyoutube, setShowyoutube] = useState(false);
const [movieID ,setMovieID] = useState(0)
  useEffect(() => {
    fetch(test)
      .then((data) => data.json())
      .then((data) => setMovietrailers(data.results));
  }, [API_URL_Trailers]);


 

  return (
    <div className="home-body">
      <button onClick={() => console.log("not in efect", movieTrailers[0].id)}>
        test
      </button>

      <div className="titles">upcoming</div>
      <div className="card-total-horizental">
        {movieTrailers.map((item, index) => {
          return (
            <div>
              <Cardhorizental key={index} prop={item} />
              <button onClick={() => {setShowyoutube(!showyoutube); setMovieID(item.id)}}>show Trailers</button>

            </div>
          );
        })}
        
                  <Youtube show={showyoutube} movieID={movieID} onClose ={() => setShowyoutube(false)}/>

       
      </div>
    </div>
  );
}
