import React from "react";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Mokhele Hotel Booking App</span>
        <div className="navItems">
          <button className="navButton">Sign Up</button>
          <button className="navButton">Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
