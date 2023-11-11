import { useState } from "react";

function Card(props) {
  return <div
    className="card"
    style={{ width: "18rem" }}
    onClick={() => {
      props.increment(props.name);
    }}>
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
}

export default Card;