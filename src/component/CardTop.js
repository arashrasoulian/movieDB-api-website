import React from "react";
import { Card } from "react-bootstrap";


export function CardTop({cardImage,cardTitle ,cardSubject}) {
    return (
      <Card className="bg-dark text-white my-70" style={{ width: '600px' }}>
        <Card.Img src={cardImage} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title variant='primary'>{cardSubject}</Card.Title>
          <Card.Text>
          {cardTitle}
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    );
  }