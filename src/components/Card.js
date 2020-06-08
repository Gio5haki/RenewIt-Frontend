import React from "react";
import "../styleSheets/Card.css";

function Card(fetchedData) {
  const { imgSrc, description, link } = fetchedData;

  return (
    <div className="cards-container">
      <div className="card-wrapper">
        <div className="card-top">
          <a href={link} target="_blank">
            <img src={imgSrc} alt="image" />
          </a>
        </div>
        <div className="card-bottom">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
