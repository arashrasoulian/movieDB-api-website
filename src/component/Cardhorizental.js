import React from "react";
import { useNavigate } from "react-router-dom";

export function Cardhorizental(prop) {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(prop.prop.id);
    navigate(`/${prop.prop.id}`);
  };

  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <div>
      <div
        className="each-cardhorizental w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative break-words"
      >
        <img
          src={
            prop.prop.backdrop_path
              ? IMG_URL + prop.prop.backdrop_path
              : "/image/logo.svg"
          }
          alt=""
          onClick={handleClick}
        ></img>

        <div className="text-box-horizental">
          <div className="title">{prop.prop.title}</div>

          <p className="vote_average">
            <b>vote_average :</b>
            {prop.prop.vote_average} <b> over </b> {prop.prop.vote_count}
          </p>
          <p className="overview-horizental">
            <b>overview:</b> {prop.prop.overview.substring(0, 200)}
            <span onClick={handleClick}> readmore</span>
          </p>
        </div>
      </div>
    </div>
  );
}
