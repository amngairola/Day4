import React from "react";
import img from "../imgs/dmitry-mashkin-EHvk2d2vAuQ-unsplash.jpg";
import "./All.css";
export default function Heart() {
  return (
    <div className="bottomcard ">
      <div className="cards">
        <img className="Topimage" src={img} alt="" />

        <div className="cardbodey ">
          <div className="tag">Technology</div>
          <h1>Headingg</h1>
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
