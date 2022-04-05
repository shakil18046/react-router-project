import React, { useContext } from "react";
import { countContext } from "../../App";
import User from "./User";
import "./Review.css"
const Review = () => {
  const user = useContext(countContext);
  console.log(user)
  return <div className="reviews-wrapper">
    {
      user.map(user=> <User user={user}></User>)
    }
  </div>;
};

export default Review;
