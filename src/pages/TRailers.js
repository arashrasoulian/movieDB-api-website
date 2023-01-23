import React from "react";
import { Spinner } from "react-bootstrap";
import {  Trailerscard } from "../component/Cards";
import { useFetch } from "../component/useFetch";
import { ApiAddress } from "../objects/ApiAddress";

export function Trailers() {
  
  const [movieTrailers,isloading] = useFetch(ApiAddress.requestUpcoming);

  

  return (
    <div className=" container home-body">
      <div className="titles">upcoming</div>
      <div className="card-total-horizental">
        {!isloading ? movieTrailers.results.map((item, index) => {
          return (
            <div className="my-4" key={index + "movietrailers"}>
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
        }) :   <div className="loading-spinner">
        <Spinner
          className="spinner"
          animation="border"
          size="xl"
          variant="primary"
        ></Spinner>
      </div>}
      </div>
    </div>
  );
}
