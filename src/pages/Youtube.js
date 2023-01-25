import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useFetch } from "../component/useFetch";
import { ApiAddress } from "../objects/ApiAddress";

export function Trailer() {
  const params = useParams();
  const requestDetails = `https://api.themoviedb.org/3/movie/${params.id}?${ApiAddress.API_KEY}&append_to_response=videos`;

  const [moviefetcher, setmoviefetcher] = useState([]);

  const [movietiser, setmovietiser] = useState([]);
  const [movieBHscene, setmovieBHscene] = useState([]);
  const [movieDetails, isloadingMoviedetails] = useFetch(requestDetails);

  useEffect(() => {
    if (!isloadingMoviedetails) {
      let teaserArray = [];
      let BhArray = [];
      let featureArray = [];
      console.log(movieDetails);
      movieDetails.videos.results.map((item, index) => {
        console.log("numberi", item.type);

        if (item.type === "Behind the Scenes") {
          return BhArray.push([item.key, item.name]);
        } else if (item.type === "Clip" || item.type === "Trailer") {
          return teaserArray.push([item.key, item.name]);
        } else {
          return featureArray.push([item.key, item.name]);
        }
      });
      setmovieBHscene(BhArray);
      setmovietiser(teaserArray);
      console.log("test", BhArray, movieBHscene);
    }
  }, [isloadingMoviedetails]);
  console.log("teaser", movietiser, "BH", movieBHscene);

  return (
    <div className="container  ">
      {isloadingMoviedetails ? (
        <div className="loading-spinner">
          <Spinner
            className="spinner"
            animation="border"
            size="xl"
            variant="primary"
          ></Spinner>
        </div>):(
      <div className="row mt-5">
        <div className="col-md-2"></div>
        <div className=" col-md-8">
          <div className="text-white my-5">
            <h1>{movieDetails.title}</h1>
          </div>
          {movietiser[0] ? (
            <iframe
              className="trailermovie"
              title="ali"
              src={`https://www.youtube.com/embed/${movietiser[0][0]}`}
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
          <div className="mt-5"></div>
        </div>
        <div className="col-md-2"></div>

        <div className="col-md-2"></div>
        <div className="col-md-8">
          {movietiser[1] && (
            <h2 className="text-white">more trailers:</h2>
          )}
          { movietiser[1] ? (
            movietiser.slice(1, 3).map((item) => {
              return (
                <div>
                  <p className="text-white mt-3">{item[1]}</p>

                  <iframe
                    className="  trailermovie mb-5"
                    title="ali"
                    src={`https://www.youtube.com/embed/${item[0]}`}
                  ></iframe>
                </div>
              );
            })
          ) : (
null          )}
         { movieBHscene[0] && (
            <h2 className="text-white my-4">Behind the Scenes : </h2>
          )}
          {movieBHscene[0] && (
            movieBHscene.slice(0, 2).map((item) => {
              return (
                <div>
                  <p className="text-white mt-3">{item[1]}</p>

                  <iframe
                    className="  trailermovie mb-5"
                    title="ali"
                    src={`https://www.youtube.com/embed/${item[0]}`}
                  ></iframe>
                </div>
              );
            })
          ) 
           
          }
        </div>
        <div className="col-md-2"></div>
      </div>)}
    </div>
  );
}
