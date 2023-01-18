import React from "react";
import { useState, useEffect } from "react";
import { CardArticle, Cardvertical } from "../component/Cards";
import { Cardhorizental } from "../component/Cards";
import {  CardGroup, Row } from "react-bootstrap";
import { ApiAddress } from "../objects/ApiAddress";

export function Home() {

  function getDatapopular() {
    fetch(ApiAddress.requestUpcoming)
      .then((data) => data.json())
      .then((data) => setLatestmovie(data.results));
  }
  function getPopularComedy() {
    fetch(ApiAddress.requestComedy)
      .then((data) => data.json())
      .then((data) => setComedylist(data.results));
  }

  const [pictures, setPictures] = useState([]);
  const [latestmovie, setLatestmovie] = useState([]);
  const [RandomNumbers, setRandomNumbers] = useState([]);

  const [comedyRandomNamber, setComedyRandomNumber] = useState([]);
  const [comedylist, setComedylist] = useState([]);

  useEffect(() => {
    fetch(ApiAddress.requestPopular)
      .then((data) => data.json())
      .then((data) => setPictures(data.results));
  }, [ApiAddress.requestPopular]);

  useEffect(() => {
    getDatapopular();
    getPopularComedy();
    setRandomNumbers(getrandomNumber(5, 3));
    setComedyRandomNumber(getrandomNumber(20, 3));
  }, [ApiAddress.requestComedy]);

  function getrandomNumber(till = 5, amount = 3) {
    let array = [];
    let y = 0;
    while (array.length <= amount - 1) {
      y = Math.floor(Math.random() * till);
      if (array.indexOf(y) === -1) {
        array.push(y);
      }
    }
    return array;
  }

  return (
    <div className="container  home-body mt-5">
      <Row>
        <div className="row d-flex flex-row flex-nowrap  overflow-hidden">
          {RandomNumbers.map((item, index) => {
            return (
              <CardGroup
                key={`${index} + ${item}`}
                className="col-xl-4  col-lg-6 container-fluid  "
              >
                <CardArticle
               
               item={item}>

               </CardArticle>
              </CardGroup>
            );
          })}
        </div>
      </Row>

      <div className="container-fluid mt-md-5">
        <div className="titles ">popular</div>
        <Row className="d-flex flex-row flex-nowrap  overflow-hidden">
          {pictures.map((item, index) => {
            return (
              <CardGroup  key={item.id + index} className="col-xl-3 col-lg-4 col-md-6 me-1rem ">
                <Cardvertical
                  key={index}
                  movieId={item.id}
                  backdrop_path={item.backdrop_path}
                  title={item.overview}
                  vote_average={item.vote_average}
                  vote_count={item.vote_count}
                  release_date={item.release_date}
                />
              </CardGroup>
            );
          })}
        </Row>
      </div>
      <div className="row  mt-md-5">
        <div className="col-lg-8 col-md-12">
          <div className="titles">upcoming</div>

          {latestmovie.map((item, index) => {
            return (
              <div className="">
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
                <div className="hrcard-style">
                  <hr></hr>
                </div>
              </div>
            );
          })}
        </div>

        <div className="col-lg-4 col-md-12 ">
          <div className=" sticky-top ">
            <span className="titles">popular comedy</span>

            {comedylist.map((item, index) => {
              return (
                <div>
                  <CardGroup className="mb-xl-1">
                    {comedyRandomNamber.indexOf(index) !== -1 && (
                      <Cardhorizental
                        key={index}
                        movieId={item.id}
                        backdrop_path={item.backdrop_path}
                        title={item.title}
                        vote_average={""}
                        vote_count={""}
                        release_date={""}
                        overview={""}
                      />
                    )}
                  </CardGroup>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
