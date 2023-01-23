import React, { useEffect } from "react";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { Cardhorizental } from "../component/Cards";
import { useFetch } from "../component/useFetch";
import { ApiAddress } from "../objects/ApiAddress";

export function Year() {
  const [yearInAPI, setYearInApi] = useState(2022);


  const API_URL_YEAR =
    ApiAddress.BASE_URL +
    `/discover/movie?primary_release_year=${yearInAPI}&sort_by=vote_average.desc&` +
    ApiAddress.API_KEY;
  const [movieYear, isloadingMovieyear] = useFetch(API_URL_YEAR);
  const [selectyear, setSelectyear] = useState([2020, 2021, 2022, 2023, 2024]);
  const [windowWidth, setWindowwidth] = useState(true);

  function getYearData(yearInFunction) {
    setYearInApi(yearInFunction);

    let array = [];
    for (let i = 0; i < 5; i++) {
      array[i] = yearInFunction - 2 + i;
    }
    setSelectyear(array);
  }

  // **** responsive**************

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 700) {
        setWindowwidth(false);
      } else {
        setWindowwidth(true);
      }
    }
    window.addEventListener("resize", handleResize);
  });
  return (
    <div centerd className="container home-body">
      <ul className="   year-select">
        {windowWidth && (
          <li onClick={() => getYearData(selectyear[0])}>{selectyear[0]} </li>
        )}
        <li onClick={() => getYearData(selectyear[1])}>{selectyear[1]} </li>
        <li
          onClick={() => getYearData(selectyear[2])}
          className="center-year-select"
        >
          {selectyear[2]}
        </li>
        <li onClick={() => getYearData(selectyear[3])}>{selectyear[3]} </li>
        {windowWidth && (
          <li onClick={() => getYearData(selectyear[4])}>{selectyear[4]} </li>
        )}
      </ul>
      <div className="titles">year : {yearInAPI}</div>
      <div className="card-total-horizental">
        {!isloadingMovieyear ?
          movieYear.results.map((item, index) => {
            
              return (
                <div className="my-4">
                  <Cardhorizental
                    key={index}
                    movieId={item.id}
                    backdrop_path={item.backdrop_path }
                    title={item.title}
                    vote_average={item.vote_average}
                    vote_count={item.vote_count}
                    release_date={item.release_date}
                    overview={item.overview}
                  />
                </div>
              );
            
          }):
          <div className="loading-spinner">
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
