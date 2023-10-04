import React from "react";
import "./VideoCard.css";

const Card = () => {
  return (
    <div className="card">
      <video controls>
        <source src=" assets/video/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="card-info">
        {/* <h2>Card Title</h2> */}
        <p>With constant electric Autonomous Flying car is possible</p>
      </div>
    </div>
  );
};

export default Card;
