import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiAddress } from "../objects/ApiAddress";

export function Trailer() {
  const params = useParams();
  const requestDetails = `https://api.themoviedb.org/3/movie/${params.id}?${ApiAddress.API_KEY}&append_to_response=videos`;

  const [movieData, setMoviedata] = useState("");
  const [movieDetails, setMoviedetails] = useState([]);

  useEffect(() => {
    fetch(requestDetails)
      .then((data) => data.json())

      .then((data) => {
        setMoviedetails(data);
        setMoviedata([data.videos.results[0].key, data.videos.results[1].key]);
        console.log(data);
      });
  }, [requestDetails]);

  console.log(movieDetails);
  return (
    <div className="container  ">
      <div className="row mt-5">
        <div className="col-md-2"></div>
        <div className=" col-md-8">
          <div className="text-white my-5">
            <h1>{movieDetails.title}</h1>
          </div>
          {movieData[0] ? (
            <iframe
              className=" trailermovie"
              title="ali"
              src={`https://www.youtube.com/embed/${movieData[0]}`}
            ></iframe>
          ) : (
            <h2 className="text-white">no trailer </h2>
          )}
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-2"></div>
        <div className="col-md-8 mt-5 text-white">
          <div>
            <b>overview :</b>
          </div>
          <div className="mb-5">{movieDetails.overview}</div>
          <div className="mt-5">
            <h1>more trailers:</h1>
          </div>
        </div>
        <div className="col-md-2"></div>

        <div className="col-md-2"></div>
        <div className="col-md-8"> 
        {movieData[1] ? (
          <iframe
            className="  trailermovie my-5"
            title="ali"
            src={`https://www.youtube.com/embed/${movieData[1]}`}
          ></iframe>
        ) : (
          <h2 className="text-white">no trailer </h2>
        )}
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
}
