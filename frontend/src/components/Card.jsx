import { useState } from "react";

function Card(props) {
  return <div className="col mb-5">
    <div className="card h-100 m-2" >
      <div className="card-body">
        <h5 className="card-title text-center">{props.name}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary text-center">{props.price}</h6>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div class="card-footer p-0 pt-0 border-top-0 bg-transparent">
          <div class="text-end">
            <button
              class="btn btn-outline-dark mt-auto m-1"
              onClick={() => {
                props.increment(props.name);
              }}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Card;