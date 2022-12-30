import React, { useEffect } from "react";
import { useState } from "react";
import { Cardhorizental } from "./Cardhorizental";

export function Year() {
  const [year, setYear] = useState("2022");
  const [movieYear, setMovieyear] = useState([]);

  const API_KEY = "api_key=1cf50e6248dc270629e802686245c2c8";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL_YEAR =
    BASE_URL +
    `/discover/movie?primary_release_year=${year}&sort_by=vote_average.desc&` +
    API_KEY;

  function getYearData() {
    fetch(API_URL_YEAR)
      .then((data) => data.json())
      .then((data) => setMovieyear(data.results));
    console.log(movieYear);
  }

  useEffect(() => {
    getYearData();
  }, []);

  return (
    <div className="home-body">
      <select
      
        id="movieyear"
        onChange={(e) => {
          setYear(e.target.value);
          console.log(year);
        }}
        onClick={getYearData}
      >
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
        <option value="2014">2014</option>
      </select>

      <div className="titles">year : {year}</div>
      <div className="card-total-horizental">
        {movieYear.map((item, index) => {
          if (item.backdrop_path) {
            return <Cardhorizental key={index} prop={item} />;
          }
        })}
      </div>
    </div>
  );
}
