import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faCar,
  faFerry,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      {/*header container*/}
      <div className="headerContainer">
        <div className="headerList">
          {/*header icons*/}
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} /> <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} /> <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} /> <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faFerry} /> <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} /> <span>Airport taxis</span>
          </div>
        </div>

        {/*header title*/}
        <h1 className="headerTitle">
          Need a booking lifetime of discounts? We got you!
        </h1>
        <p className="headerDescription">
          Get the best rewards for your travels - while unlocking instant
          savings of 10% or more with a free Mokhele Hotel Booking account.
        </p>
        <button className="headerButton">Sign in / Sign up</button>
      </div>
    </div>
  );
};

export default Header;
