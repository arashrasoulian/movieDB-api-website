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
    `/discover/movie?primary_release_year=${yearInAPI}&sort_by=popularity.desc&` +
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
      if (window.innerWidth < 800) {
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
        {windowWidth
          ? selectyear.map((item, index) => {
              if (index !== 2) {
                return (
                  <li
                    key={index + item + "1"}
                    onClick={() => getYearData(selectyear[index])}
                  >
                    {item}
                  </li>
                );
              } else {
                return (
                  <li
                    key={index + item +"2"}
                    onClick={() => getYearData(selectyear[index])}
                    className="center-year-select"
                  >
                    {item}
                  </li>
                );
              }
            })
          : selectyear.slice(1, 4).map((item, index) => {
              if (index !== 1) {
                return (
                  <li
                    key={index + item +"3"}
                    onClick={() => getYearData(selectyear[index + 1])}
                  >
                    {item}
                  </li>
                );
              } else {
                return (
                  <li
                    key={index + item +"4"}
                    onClick={() => getYearData(selectyear[index+1])}
                    className="center-year-select"
                  >
                    {item}
                  </li>
                );
              }
            })}
      </ul>

      <div className="titles">year : {yearInAPI}</div>
      <div className="card-total-horizental">
        {!isloadingMovieyear ? (
          movieYear.results.map((item, index) => {
            return (
              <div className="my-4" key={index + item.id}>
                <Cardhorizental
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
          })
        ) : (
          <div className="loading-spinner">
            <Spinner
              className="spinner"
              animation="border"
              size="xl"
              variant="primary"
            ></Spinner>
          </div>
        )}
      </div>
    </div>
  );
}
