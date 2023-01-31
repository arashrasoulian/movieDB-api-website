import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { article } from "../objects/articles";

const IMG_URL = "https://image.tmdb.org/t/p/w500";

export function CardArticle({ item }) {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("subject:");
    navigate(`/article/:${article[item].id}`);
  };

  return (
    <Card className="bg-dark text-white" onClick={handleClick}>
      <div className="testfor">
        <Card.Img
          src={`${article[item].picture}`}
          className="card-top-image"
        ></Card.Img>
      </div>
      <Card.ImgOverlay className="card-title-cont">
        <Card.Text>
          <span className=" card-top-subject">{article[item].subject}</span>
        </Card.Text>
        <Card.Text>{article[item].title}</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export function Cardvertical({
  movieId,
  backdrop_path,
  title,
  vote_average,
  vote_count,
  release_date,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${movieId}`);
  };

  function makeFiftystring(string) {
    if (string.length > 68) {
      string = string.substring(0, 64) + "...";
    }
    return string;
  }

  return (
    <Card
      className=" border-0 bg-transparent vertical-card-size"
      variant="dark"
      text="white"
      onClick={handleClick}
    >
      <Card.Img variant="top" src={`${IMG_URL + backdrop_path}`} />
      <Card.Body>
        <Card.Title className="h-40">{makeFiftystring(title)}</Card.Title>
        <Card.Text>
          <small> vote : {vote_average} </small>
          <small className="text-muted ms-4 ">release : {release_date}</small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

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

  return (
    <Card
      variant="dark"
      text="white"
      className="border-0  "
      onClick={handleClick}
    >
      <div className="row g-0 card-Background ">
        <div className="col-md-5 ">
          <Card.Img
            variant="top"
            src={`${
              backdrop_path ? IMG_URL + backdrop_path : "/image/noImage.png"
            }`}
          />
        </div>
        <div className="col-md-7">
          <Card.Body className="mt-md-0 mt-3">
            <Card.Title className=" testol ">{title}</Card.Title>
            {overview.length > 0 && (
              <Card.Text className="font-horizentalcard-overview">
                {overview.substring(0, 180)}...
                <small className="text-muted"> more</small>
              </Card.Text>
            )}

            {release_date && (
              <small className=" font-horizentalcard-release-date">
                <span>
                  vote : {vote_average} over {vote_count}
                </span>

                <span className="text-muted ms-4 ">
                  release_date : {release_date}{" "}
                </span>
              </small>
            )}
          </Card.Body>
        </div>
      </div>
    </Card>
  );
}

export function Searchcard({ movieId, backdrop_path, title }) {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(movieId);
    navigate(`/${movieId}`);
  };

  return (
    <Card
      variant="white"
      text="black"
      className="search-card-main "
      onClick={handleClick}
    >
      <div className="row g-0 ">
        <div className="col-3 ">
          <Card.Img
            variant="top"
            src={`${
              backdrop_path ? IMG_URL + backdrop_path : "/image/noImage.png"
            }`}
          />
        </div>
        <div className="col-9">
          <Card.Body>
            <Card.Title className="search-card-title">
              {title.length < 37 ? title : `${title.substring(0, 36)}...`}
            </Card.Title>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
}

export function ComedyCard({ movieId, backdrop_path, title }) {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(movieId);
    navigate(`/${movieId}`);
  };

  return (
    <Card
      variant="dark"
      text="white"
      className="border-0 mb-3"
      onClick={handleClick}
    >
      <div className="row   card-Background ">
        <div className="col-5 ">
          <Card.Img
            variant="top"
            src={`${
              backdrop_path ? IMG_URL + backdrop_path : "/image/noImage.png"
            }`}
          />
        </div>
        <div className="col-7">
          <Card.Body>
            <Card.Title className="comedycard-title">
              {title.length < 37 ? title : `${title.substring(0, 36)}...`}
            </Card.Title>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
}

export function Trailerscard({
  movieId,
  backdrop_path,
  title,
  vote_average,
  vote_count,
  overview,
  release_date,
}) {
  const navigate = useNavigate();
  const [overviewcharacter, setOverviewcharacter] = useState([165, "... more"]);
  const handleClick = () => {
    navigate(`/trailers/${movieId}`);
  };

  function handelClickmore() {
    if (overviewcharacter[0] === 165) {
      setOverviewcharacter([1800, "less"]);
    } else {
      setOverviewcharacter([165, "...more"]);
    }
  }

  return (
    <Card variant="dark" text="white" className="border-0  ">
      <div className="row g-0 card-Background ">
        <div className="col-md-5  col-xl-3 col-lg-4">
          <Card.Img
            onClick={handleClick}
            variant="top"
            src={`${IMG_URL + backdrop_path}`}
            className="image-trailercard"
          />
        </div>
        <div className="col-md-7 col-lg-8">
          <Card.Body>
            <Card.Title className=" trailercard-title " onClick={handleClick}>
              {title.length > 39 ? `${title.substring(0, 39)}...` : `${title}`}
            </Card.Title>
            {overview.length > 0 && (
              <Card.Text className="trailercard-overview my-4">
                {overview.substring(0, overviewcharacter[0])}...
                <small
                  className="text-muted more-trailerscrad-preview"
                  onClick={handelClickmore}
                >
                  {overviewcharacter[1]}
                </small>
              </Card.Text>
            )}

            {release_date && (
              <small className=" font-horizentalcard-release-date">
                <span>
                  vote : {vote_average} over {vote_count}
                </span>

                <span className="text-muted ms-4 ">
                  release_date : {release_date}{" "}
                </span>
              </small>
            )}
          </Card.Body>
        </div>
      </div>
    </Card>
  );
}
