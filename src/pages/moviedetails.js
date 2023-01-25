import React, {  useState } from "react";
import { Button, Container, Modal, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ApiAddress } from "../objects/ApiAddress";
import Spinner from "react-bootstrap/Spinner";
import { useFetch } from "../component/useFetch";

export function Moviedetails() {
  const params = useParams();
  const SAMPLE = `https://api.themoviedb.org/3/movie/${params.id}?${ApiAddress.API_KEY}&append_to_response=videos`;
  const [show, setShow] = useState(false);
  const [details, isloading] = useFetch(SAMPLE);


  function showModal() {
    setShow(!show);
  }

  return (
    <Container className="container-fluid mt-5">
      {isloading ? (
        <div className="loading-spinner">
          <Spinner
            className="spinner"
            animation="border"
            size="xl"
            variant="primary"
          ></Spinner>
        </div>
      ) : (
        <div className=" movie-details text-white ">
          <Row>
            <img
              className="image col-md-5 col-8"
              src={ApiAddress.IMG_URL + details.poster_path}
              alt="picturews"
            ></img>
            <div className="col-md-7 col-8 mt-4 ">
              <div className="">
                <b>title:</b>
              </div>
              <div className="title mb-3">{details.title}</div>
              <div className="overview mb-3">
                <div className="">
                  <b>overview : </b>
                </div>
                {details.overview}
              </div>
              <div className="release_date mb-3">
                <div>
                  <b>release date : </b>
                </div>
                {details.release_date}
              </div>
              <div className="mb-3">
                <b>genres :</b>
              </div>
              {details.genres
                ? details.genres.slice(0, 4).map((item, index) => {
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
              {
                <div>
                  <Button
                    className="my-4 opacity-10"
                    variant="success"
                    onClick={showModal}
                  >
                    watch trailer
                  </Button>
                </div>
              }
              <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                  {details.videos.results[0] ? (
                    <iframe
                      fullscreen="sm-down"
                      className="modal-trailer"
                      title="ali"
                      src={`https://www.youtube.com/embed/${details.videos.results[0].key}`}
                    ></iframe>
                  ) : (
                    <div className="no-trailers"> no trailers</div>
                  )}
                </Modal.Body>
              </Modal>
            </div>
          </Row>
        </div>
      )}
    </Container>
  );
}

