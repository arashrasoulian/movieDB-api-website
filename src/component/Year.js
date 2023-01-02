import React, { useEffect } from "react";
import { useState } from "react";
import { Cardhorizental } from "./Cardhorizental";

export function Year() {
  const [yearInAPI, setYearInApi] = useState(2022);
  const [movieYear, setMovieyear] = useState([]);
  const [selectyear, setSelectyear] = useState([2020, 2021, 2022, 2023, 2024]);

  const API_KEY = "api_key=1cf50e6248dc270629e802686245c2c8";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL_YEAR =
    BASE_URL +
    `/discover/movie?primary_release_year=${yearInAPI}&sort_by=vote_average.desc&` +
    API_KEY;

  function getYearData(yearInFunction) {
    setYearInApi(yearInFunction);

  
    let array = [];
    for (let i = 0; i < 5; i++) {
      array[i] = yearInFunction - 2 + i;
    }
    setSelectyear(array);
    console.log(yearInFunction , "year:",yearInAPI );
  }

  useEffect(() => {
    fetch(API_URL_YEAR)
    .then((data) => data.json())
    .then((data) => setMovieyear(data.results));
  }, [yearInAPI]);

  return (
    <div className="home-body">
      <ul className="year-select">
        <li onClick={()=> getYearData(selectyear[0])}>{selectyear[0]} </li>
        <li onClick={() => getYearData(selectyear[1])}>{selectyear[1]} </li>
        <li
          onClick={() => getYearData(selectyear[2])}
          className="center-year-select"
        >
          {selectyear[2]}
        </li>
        <li onClick={() => getYearData(selectyear[3])}>{selectyear[3]} </li>
        <li onClick={() => getYearData(selectyear[4])}>{selectyear[4]} </li>
      </ul>
      <div className="titles">year : {yearInAPI}</div>
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
