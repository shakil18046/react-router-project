import React from "react";
import bike from "./../../../assests/bike.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="Hero-area">
      <div className="hero-content-wrapper">
        <h1 className="Hero-area-heading">
          Best racing bike in Reasonable Budget
        </h1>
        <p className="Hero-area-paragraph">
          The Kawasaki Ninja H2R has been in the headlines for being one of a
          kind. The Japanese brand took more than three years to design the
          Kawasaki Ninja H2, which is the predecessor of the H2R. When you
          analyse the speed and specifications of Ninja H2, you feel this is
          probably the best there is. The Kawasaki superbike is not a road bike
          but is limited to only tracks because of its mind-boggling
          specifications. With a 1000cc engine that produces power of 310 bhp at
          14000 rpm and a peak torque of 165 Nm at 12500 rpm, this is an
          untamable beast controlled only by its superior top-quality brakes.
        </p>
        <button>Live demo</button>
      </div>
      <div className="hero-image-wrapper">
        <img src={bike} alt=""></img>
      </div>
    </div>
  );
};

export default Banner;
