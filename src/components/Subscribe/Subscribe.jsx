import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="subContainer">
      <div className="subHeader">
        <h1 className="subHeaderText">Save data, save moola!</h1>
        <span className="subCatch">
          Sign up and we'll send the best deals to you
        </span>
      </div>

      <div class="subscriptionFormWrap">
        <input
          type="email"
          name="to"
          autocapitalize="off"
          required="true"
          class="inputSubscription"
          placeholder="Your email"
          title=""
          value=""
        />
        <button id="newsletterButtonFooter">Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;
