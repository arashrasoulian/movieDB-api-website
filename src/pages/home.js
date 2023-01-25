import React from "react";
import { useState, useEffect } from "react";
import { CardArticle, Cardvertical, ComedyCard } from "../component/Cards";
import { Cardhorizental } from "../component/Cards";
import { CardGroup, Row, Spinner } from "react-bootstrap";
import { ApiAddress } from "../objects/ApiAddress";
import { useFetch } from "../component/useFetch";

export function Home() {
  const [latestmovie, isloadingLatest] = useFetch(ApiAddress.requestUpcoming);
  const [comedylist, isloadingComedylist] = useFetch(ApiAddress.requestComedy);
  const [popularmovie, isloadingPopular] = useFetch(ApiAddress.requestPopular);
  
  const [RandomNumbers, setRandomNumbers] = useState([]);
  const [comedyRandomNamber, setComedyRandomNumber] = useState([]);

  useEffect(() => {
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
      {isloadingLatest ? (
        <div className="loading-spinner">
          <Spinner
            className="spinner"
            animation="border"
            size="xl"
            variant="primary"
          ></Spinner>
        </div>
      ) : (
        <div>
          <Row>
            <div className="row d-flex flex-row flex-nowrap  overflow-hidden">
              {RandomNumbers.map((item, index) => {
                return (
                  <CardGroup
                    key={`${index} + ${item}+randomnumber`}
                    className="col-xl-4  col-lg-6 container-fluid  "
                  >
                    <CardArticle item={item}></CardArticle>
                  </CardGroup>
                );
              })}
            </div>
          </Row>

          <div className="container-fluid mt-md-5">
            <div className="titles ">popular</div>
            <Row className="d-flex flex-row flex-nowrap  overflow-hidden">
              {!isloadingPopular &&
                popularmovie.results.map((item, index) => {
                  return (
                    <CardGroup
                      key={item.id + index + "popular"}
                      className="col-xl-3 col-lg-4 col-md-6 me-1rem "
                    >
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

              {latestmovie.results.map((item, index) => {
                return (
                  <div className="" key={index+item.id}>
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

                {!isloadingComedylist &&
                  comedylist.results.map((item, index) => {
                    return (
                      <div key={"comedy" + index + item.id}>
                        <CardGroup >
                          {comedyRandomNamber.indexOf(index) !== -1 && (
                            <ComedyCard
                              key={index}
                              movieId={item.id}
                              backdrop_path={item.backdrop_path}
                              title={item.title}
                              
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
      )}
    </div>
  );
}
