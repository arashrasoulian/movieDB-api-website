import React, { useEffect, useState } from "react";
import { Button, Container, Modal, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ApiAddress } from "../objects/ApiAddress";

export function Moviedetails() {
  const params = useParams();

  const SAMPLE = `https://api.themoviedb.org/3/movie/${params.id}?${ApiAddress.API_KEY}&append_to_response=videos`;

  const [Details, setDetails] = useState([]);
  const [show, setShow] = useState(false);
  const [movieTrailer ,setMovietrailer] = useState([])

  function getData() {
    fetch(SAMPLE)
      .then((data) => data.json())
      .then((data) => {setDetails(data); setMovietrailer(data.videos.results[0].key);});
  }
  function getGenres() {
    let array = [];
    let string = "";
    if (Details.length) {
      array = Details.genres;
      string = array.map((item) => (string = string + item));
    }
  }


  console.log("detail:", Details.genres);

  useEffect(() => {
    getGenres();
    
  }, [Details]);

  useEffect(() => {
    getData();
  }, [params.id]);

 

  function showModal() {
    setShow(!show);
  }

  return (
    <Container className="container-fluid mt-5">
      (
        <div className=" movie-details text-white ">
          <Row>
            <img
              className="image col-md-5 col-8"
              src={ApiAddress.IMG_URL + Details.poster_path}
              alt="picturews"
            ></img>
            <div className="col-md-7 col-8 mt-4 ">
              <div className="">
                <b>title:</b>
              </div>
              <div className="title mb-3">{Details.title}</div>
              <div className="overview mb-3">
                <div className="">
                  <b>overview : </b>
                </div>
                {Details.overview}
              </div>
              <div className="release_date mb-3">
                <div>
                  <b>release date : </b>
                </div>
                {Details.release_date}
              </div>
              <div className="mb-1">
                <b>genres :</b>
              </div>
              {Details.genres
                ? Details.genres.slice(0, 4).map((item, index) => {
                    return (
                      <span
                        key={index + item}
                        className="text-white bg-primary bg-gradient  p-2 m-1"
                      >
                        {item.name}
                      </span>
                    );
                  })
                : null}
              <div>
                <Button className="my-4" variant="danger" onClick={showModal}>
                  watch trailer
                </Button>
              </div>

              <Modal
                show={show}
                onHide={() => setShow(false)}
              >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                 <iframe
                    className="modal-trailer"
                    title="ali"
                    src={`https://www.youtube.com/embed/${movieTrailer}`}
                  ></iframe> 
                </Modal.Body>
              </Modal>

           
            </div>
          </Row>
        </div>
      )
    </Container>
  );
}
