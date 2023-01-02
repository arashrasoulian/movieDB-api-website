import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Moviedetails() {
  const params = useParams();

  const key = "1cf50e6248dc270629e802686245c2c8";
  const SAMPLE = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}&append_to_response=videos`;
  const IMG_URL = "https://image.tmdb.org/t/p/w500";
 const movieRiviewSample = `https://api.themoviedb.org/3/review/${50}?api_key=${key}`
  
 const [Details, setDetails] = useState([]);
 const [reviw, setReviw] = useState([]);

  function getData() {
    fetch(SAMPLE)
      .then((data) => data.json())
      .then((data) => setDetails(data));
  }

  useEffect(() => {
    getData();
  }, []);
  function getreview() {
    fetch(movieRiviewSample)
      .then((data) => data.json())
      .then((data) => setReviw(data));
      console.log(reviw);
  }

  useEffect(() => {
    getreview();
  }, []);

  return (
    <div className="movie-details">
      <img className="image" src={IMG_URL + Details.backdrop_path} alt="picturews"></img>
      <div className="title">{Details.title}</div>
      <div className="overview"><b>overview : </b>{Details.overview}</div>
      <div className="release_date"><b>release date : </b>{Details.release_date}</div>

<button>more review</button>
    </div>
  );
}
