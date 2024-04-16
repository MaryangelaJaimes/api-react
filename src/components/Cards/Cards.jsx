import "./Cards.css";
import React from "react";

const Cards = ({ results }) => {
  let character;

  if (results) {
    character = results.map((x) => {
      const { id, name, image, gender, species, status } = x;
      return (
        <div key={id} className="col-3">
          <div className=" card mt-3 ">
            <img src={image} className="img-fluid cards" />
            <div className="content  text-center card-content">
              <p className="fs-5 my-2 ">{name}</p>
              <p className="fs-6 mb-1">{gender}</p>
              <p className="fs-6 mb-1">{species}</p>
              <p className="fs-6 mb-1">{status}</p>
            </div>
          </div>
        </div>
      );
    });
  } else {
    character = "Sin resultados";
  }
  return <>{character}</>;
};
export default Cards;
