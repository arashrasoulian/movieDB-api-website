import React from "react";
import { useState, useEffect } from "react";
import { Card } from "../component/Card";
import { Cardhorizental } from "./Cardhorizental";

export function Home() {
  const API_KEY = "api_key=1cf50e6248dc270629e802686245c2c8";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL =
    BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;

  const requestUpcoming = `https://api.themoviedb.org/3/movie/upcoming?${API_KEY}&language=en-US&page=1`;

  function getDatapopular() {
    fetch(requestUpcoming)
      .then((data) => data.json())
      .then((data) => setLatestmovie(data.results));

  }

  const [pictures, setPictures] = useState([]);
  const [latestmovie, setLatestmovie] = useState([]);
  // const [firstthreepictures, setFirstthreepictures] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((data) => data.json())
      .then((data) => setPictures(data.results));
      console.log(latestmovie);

  }, [API_URL]);  


  useEffect(() => {
    getDatapopular();

  }, []);

    

  return (
    <div className="home-body">
     <div className="titles">popular</div>
        <div className="card-total">
          {pictures.map((item, index) => {
            return <Card className="card-component" key={index} prop={item} />;
          })}
        </div>
        <div className="titles">upcoming</div>
        <div className="card-total-horizental">
          {latestmovie.map((item, index) => {
            return <Cardhorizental key={index} prop={item} />;
          })}
        </div>
    </div>
  );
}
