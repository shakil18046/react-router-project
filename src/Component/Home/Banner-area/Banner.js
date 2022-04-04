import React from "react";
import bike from "./../../../assests/bike.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="Hero-area">
      <div className="hero-content-wrapper">
        <h1 className="Hero-area-heading">
          Best Vloging Camera in Reasonable Budget
        </h1>
        <p className="Hero-area-paragraph">
          The Sony ZV-E10 is a great, lightweight vlogging camera with a fully
          articulating screen and impressive video quality at up to 4K
          resolution (30fps). Its size makes it a great option for anyone
          looking for a grab-and-shoot camera, and Sony offers a host of compact
          lenses to help you really get the most out of it
        </p>
        <button>Live demo</button>
      </div>
      <div className="hero-image-wrapper">
        <img src={bike}></img>
      </div>
    </div>
  );
};

export default Banner;
