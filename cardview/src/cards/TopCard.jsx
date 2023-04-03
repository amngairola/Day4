import React from "react";
import img from "../imgs/pakata-goh-Ovb-MejXjOg-unsplash.jpg";
import "./All.css";

export default function TopCard() {
  return (
    <div className="topcard">
      <div className="card">
        <img className="Topimg" src={img} alt="" />

        <div className="cardbody">
          <div className="tag">Technology</div>
          <h1>Heading</h1>
          <h6>Apr 1 , 2023</h6>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}
