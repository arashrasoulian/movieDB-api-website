import React, { useEffect, useState } from "react";
import { Container} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { article } from "../objects/articles";

export function ArticleDetails() {
  const params = useParams();
const[articleID] = useState(`${params.id.slice(1)}`)
  const [articleDetails, setarticleDetails] = useState({});

  function findArticle(articleId) {
    return articleId.id === articleID
    
  }
  useEffect(() => {
    setarticleDetails(article.find(findArticle));
  }, [articleID]);


  return (
    <Container className="container-fluid mt-5">
      <div
        className=""
        style={{ backgroundImage: `url(${articleDetails.picture}` }}
      ></div>

      <div className=" movie-details text-white ">
          <img
            className="image col-lg-8 col-12"
            src={articleDetails.picture}
            alt="picturews"
          ></img>
          <div className="col-md-7 col-8 mt-4 ">
            <div className="">
              <b>title:</b>
            </div>
            <div className="title mb-3">{articleDetails.title}</div>
            <div className="overview mb-3">
              <div className="">
                <b>overview : </b>
              </div>
              {articleDetails.text}
            </div>
            <div className="release_date mb-3">
              <button>more review</button>
              <div>
                <b>release date : </b>
              </div>
              {articleDetails.subject}
            </div>
          </div>
          <button>more review</button>
      </div>
    </Container>
  );
}
