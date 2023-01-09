import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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

  const IMG_URL = "https://image.tmdb.org/t/p/w500";


function makeFiftystring(string){
  if (string.length > 40){
   
    string = string.substring(0,36) +"..." 
  }
  return string
}


  return (
    <Card
      className=" border-0 bg-transparent"
      variant="dark"
      text="white"
      onClick={handleClick}
    >
        <Card.Img variant="top" src={`${IMG_URL + backdrop_path}`} />
        <Card.Body>
          <Card.Title className="h-40">{makeFiftystring(title)}</Card.Title>
          <Card.Text>release_date : {release_date}</Card.Text>
        <Card.Text>
          <small className="text-muted">
            vote : {vote_average} from {vote_count} votes
          </small>
        </Card.Text>
        </Card.Body>

    </Card>

    // <div>
    //   <div className="each-card">
    //     <img
    //       className="image"
    //       src={
    //         backdrop_path
    //           ? IMG_URL + backdrop_path
    //           : "http://via.placeholder.com/1080x1580"
    //       }
    //       alt=""
    //       onClick={handleClick}
    //     ></img>
    //     <div className="text-box">
    //       <p>{title}</p>
    //     </div>
    //     <p className="vote_average">
    //       <b>vote_average :</b>
    //       {vote_average} <b> over: </b> {vote_count}
    //     </p>
    //     <p className="overview">
    //       <b>overview: </b> {overview.substring(0, 200)}
    //       <span onClick={handleClick}> readmore</span>
    //     </p>
    //   </div>
    // </div>
  );
}
