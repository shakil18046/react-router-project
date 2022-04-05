import React from "react";
import { useNavigate } from "react-router-dom";
import useReview from "../../Hook/Hook";
import User from "../User/User";
import "./Review.css";

const Review = () => {
  const navigate = useNavigate();
  const [user] = useReview();
  console.log(user);
  return (
    <div>
      <h1 className="review-heading">
        Customer Reviews({user.slice(0, 3).length})
      </h1>
      <div className="short-review-wrapper">
        {user.slice(0, 3).map((user) => (
          <User user={user}></User>
        ))}
      </div>
      <div className="btn-wrapper">
        <a href="" onClick={() => navigate("/Reviews")}>
          see all review
        </a>
      </div>
    </div>
  );
};

export default Review;
