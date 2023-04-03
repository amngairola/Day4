import React from "react";
import img from "../imgs/nicola-fioravanti-W5OwUWIvMa8-unsplash.jpg";
import "./All.css";
export default function Bottommobile() {
  return (
    <div className="padding">
      <div className="card">
        <img className="Topimg" src={img} alt="" />

        <div className="cardbody ">
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
