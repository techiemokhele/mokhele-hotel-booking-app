import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save data, save moola!</h1>
      <span className="mailDescription">
        Sign up and we'll send the best deals to you
      </span>

      <div class="mailInputContainer">
        <input type="email" placeholder="Enter your email address" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;
