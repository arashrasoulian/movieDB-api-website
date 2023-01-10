import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CardTop } from "./CardTop";

export function Cardhorizental({
  movieId,
  backdrop_path,
  title,
  vote_average,
  vote_count,
  overview,
  release_date,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(movieId);
    navigate(`/${movieId}`);
  };

  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <Card
      variant="dark"
      text="white"
      className="border-0 my-4"
      onClick={handleClick}
    >
      <div className="row g-0 card-Background ">
        <div className="col-md-4 me-2">
          <Card.Img variant="top" src={`${IMG_URL + backdrop_path}`} />
        </div>
        <div className="col-md-7">
          <Card.Body>
            <Card.Title className=" testol">{title}</Card.Title>
            {overview.length > 0 && (
              <Card.Text>
                {overview.substring(0, 180)}...
                <small className="text-muted"> more</small>
              </Card.Text>
            )}

            <small className="text-muted">
              release_date : {release_date}
              vote : {vote_average} from {vote_count} votes
            </small>
          </Card.Body>
        </div>
      </div>
    </Card>

    // <div>
    //   <div className="each-cardhorizental w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative break-words">
    //     <img
    //       src={
    //         backdrop_path
    //           ? IMG_URL + backdrop_path
    //           : "/image/logo.svg"
    //       }
    //       alt=""
    //       onClick={handleClick}
    //     ></img>

    //     <div className="text-box-horizental">
    //       <div className="title">{title}</div>

    //       <p className="vote_average">
    //         <b>vote_average :</b>
    //         {vote_average} <b> over </b> {vote_count}
    //       </p>
    //       <p className="overview-horizental">
    //         <b>overview:</b> {overview.substring(0, 200)}
    //         <span onClick={handleClick}> readmore</span>
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
}
