import React from "react";
import { useNavigate } from "react-router-dom";

export function Card(prop) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${prop.prop.id}`);
  };

  const IMG_URL = "https://image.tmdb.org/t/p/w500";
  return (
    <div>
      <div className="each-card">
        <img
          className="image"
          src={
            prop
              ? IMG_URL + prop.prop.backdrop_path
              : "http://via.placeholder.com/1080x1580"
          }
          alt=""
          onClick={handleClick}
        ></img>
        <div className="text-box">
          <p>{prop.prop.title}</p>
        </div>
        <p className="vote_average">
          <b>vote_average :</b>
          {prop.prop.vote_average} <b> over: </b> {prop.prop.vote_count}
        </p>
        <p className="overview">
          <b>overview: </b> {prop.prop.overview.substring(0,200)}
          <span onClick={handleClick}> readmore</span>

        </p>
      </div>
    </div>
  );
}
