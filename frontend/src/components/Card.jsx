import { useState } from "react";

function Card(props) {
  return <div className="col mb-5">
    <div className="card h-100 m-2" >
      <div className="card-body">
        <h5 className="card-title text-center">{props.product.id} - {props.product.name}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary text-center">€ {props.product.price}</h6>
        <p className="card-text">{props.product.description}</p>
        <h6 className="card-text mb-2 text-body-secondary text-end">{props.product.date_created}</h6>
        <div className="card-footer p-0 pt-0 border-top-0 bg-transparent">
          <div className="text-end">
            <button
              className="btn btn-outline-dark mt-auto m-1"
              onClick={() => {
                props.increment(props.product.id);
              }}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Card;