import React from "react";
import { useState, useEffect } from "react";
import { Cardvertical } from "../component/Card";
import { Cardhorizental } from "./Cardhorizental";
import { article } from "./articles";
import { CardTop } from "./CardTop";
import { Button, Card, CardGroup, Container, Row } from "react-bootstrap";
export function Home() {
  const API_KEY = "api_key=1cf50e6248dc270629e802686245c2c8";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL =
    BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
  const COMEDY_API = `https://api.themoviedb.org/3/discover/movie?${API_KEY}&with_genres=35`;
  const requestUpcoming = `https://api.themoviedb.org/3/movie/upcoming?${API_KEY}&language=en-US&page=1`;

  function getDatapopular() {
    fetch(requestUpcoming)
      .then((data) => data.json())
      .then((data) => setLatestmovie(data.results));
  }
  function getPopularComedy() {
    fetch(COMEDY_API)
      .then((data) => data.json())
      .then((data) => setComedylist(data.results));
  }

  const [pictures, setPictures] = useState([]);
  const [latestmovie, setLatestmovie] = useState([]);
  const [RandomNumbers, setRandomNumbers] = useState([]);

  const [comedyRandomNamber, setComedyRandomNumber] = useState([]);
  const [comedylist, setComedylist] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((data) => data.json())
      .then((data) => setPictures(data.results));
  }, [API_URL]);

  useEffect(() => {
    getDatapopular();
    getPopularComedy();
    setRandomNumbers(getrandomNumber(5, 3));
    setComedyRandomNumber(getrandomNumber(20, 3));
  }, [COMEDY_API]);

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
    <div className="container  home-body">

      <Row>
        <div className="row d-flex flex-row flex-nowrap  overflow-hidden">
          {RandomNumbers.map((item, index) => {
            return (
              <CardGroup
                key={`${index} + ${item}`}
                className="col-xl-4  col-lg-6 container-fluid  "
              >
                <Card className="bg-dark text-white">
                  <div className="testfor">
                    <Card.Img
                      src={`${article[item].picture}`}
                      className="card-top-image"
                    ></Card.Img>
                  </div>
                  <Card.ImgOverlay className="card-title-cont">
                      <Card.Text>
                        <span className=" card-top-subject">
                          {article[item].subject}
                        </span>
                      </Card.Text>
                      <Card.Text>{article[item].title}</Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </CardGroup>
            );
          })}
        </div>
      </Row>

      <div className="titles">popular</div>
      <div className="container-fluid py-2">
        <Row className="d-flex flex-row flex-nowrap  overflow-hidden">
          {pictures.map((item, index) => {
            return (
              <CardGroup className="col-xl-3 col-lg-4 col-md-6 me-1rem ">
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

      <div className="titles">upcoming</div>
      <Row>
        <div className="col-lg-8">
          {latestmovie.map((item, index) => {
            return (
              <div className="mb-5">
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
                  <CardGroup>
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
      </Row>
    </div>
  );
}
