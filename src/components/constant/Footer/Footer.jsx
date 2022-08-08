import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAfrica,
  faCartFlatbedSuitcase,
  faCity,
  faLandmarkFlag,
  faHotel,
  faMap,
  faMapPin,
  faHouseChimney,
  faBuilding,
  faVihara,
  faHouse,
  faBed,
  faHouseCrack,
  faBookmark,
  faMapLocation,
  faMagnifyingGlassLocation,
  faComments,
  faScroll,
  faPeopleGroup,
  faUmbrellaBeach,
  faCar,
  faPlaneDeparture,
  faUtensils,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
  const Year = new Date().getFullYear();

  return (
    <div className="footerContainer">
      <div className="footerLists">
        <ul className="footerList">
          <li className="footerListItem">
            <FontAwesomeIcon
              icon={faCartFlatbedSuitcase}
              className="footerIcon"
            />
            Airports
          </li>
          <li className="footerListItem">
            <FontAwesomeIcon icon={faCity} className="footerIcon" /> Cities
          </li>
          <li className="footerListItem">
            <FontAwesomeIcon icon={faEarthAfrica} className="footerIcon" />
            Countries
          </li>
          <li className="footerListItem">
            <FontAwesomeIcon icon={faLandmarkFlag} className="footerIcon" />
            Districts
          </li>
          <li className="footerListItem">
            <FontAwesomeIcon icon={faHotel} className="footerIcon" />
            Hotels
          </li>
          <li className="footerListItem">
            <FontAwesomeIcon icon={faMap} className="footerIcon" />
            Regions
          </li>
          <li className="footerListItem">
            <FontAwesomeIcon icon={faMapPin} className="footerIcon" />
            Places of interest
          </li>
        </ul>
        <ul className="footerList">
          <li className="footerListItem">
            <FontAwesomeIcon icon={faHouseChimney} className="footerIcon" />{" "}
            Home
          </li>
          <li className="footerListItem">
            <FontAwesomeIcon icon={faBuilding} className="footerIcon" />{" "}
            Apartments
          </li>
          <li className="footerListItem">
            <FontAwesomeIcon icon={faHotel} className="footerIcon" /> Resorts
          </li>
          <li className="footerListItem">
            <FontAwesomeIcon icon={faVihara} className="footerIcon" /> Villas
          </li>
          <li className="footerListItem">
            <FontAwesomeIcon icon={faHouse} className="footerIcon" />
            Hotels
          </li>
          <li className="footerListItem">
            <FontAwesomeIcon icon={faBed} className="footerIcon" />
            B&Bs
          </li>
          <li className="footerListItem">
            <FontAwesomeIcon icon={faHouseCrack} className="footerIcon" />
            Guest houses
          </li>
        </ul>
        <ul className="footerList">
          <li className="footerListItem">
            <FontAwesomeIcon icon={faBookmark} className="footerIcon" />
            Unique places to stay
          </li>
          <li className="footerListItem">
            <FontAwesomeIcon icon={faMapLocation} className="footerIcon" />
            All destinations
          </li>
          <li className="footerListItem">
            <FontAwesomeIcon
              icon={faMagnifyingGlassLocation}
              className="footerIcon"
            />{" "}
            Discover
          </li>
          <li className="footerListItem">
            <FontAwesomeIcon icon={faComments} className="footerIcon" /> Reviews
          </li>
          <li className="footerListItem">
            <FontAwesomeIcon icon={faScroll} className="footerIcon" />
            Unpacked: Travel blogs
          </li>
          <li className="footerListItem">
            <FontAwesomeIcon icon={faPeopleGroup} className="footerIcon" />
            Travel connections
          </li>
          <li className="footerListItem">
            <FontAwesomeIcon icon={faUmbrellaBeach} className="footerIcon" />
            Weekend, holiday, seasonal deals
          </li>
        </ul>
        <ul className="footerList">
          <li className="footerListItem">
            <FontAwesomeIcon icon={faCar} className="footerIcon" /> Car rental
          </li>
          <li className="footerListItem">
            <FontAwesomeIcon icon={faPlaneDeparture} className="footerIcon" />{" "}
            Flight finder
          </li>
          <li className="footerListItem">
            <FontAwesomeIcon icon={faUtensils} className="footerIcon" />
            Restaurant reservation
          </li>
          <li className="footerListItem">
            <FontAwesomeIcon icon={faCircleInfo} className="footerIcon" />
            MHBA: Travel Agents
          </li>
        </ul>
      </div>

      <div className="footerText">
        <div className="text">
          Copyright © 2022–{Year} Mokhele Hotel Booking App™. All rights
          reserved.
        </div>
        <div className="text">
          Mokhele Hotel Booking App is part of Mokhele Holdings Inc., the world
          leader in online travel and related services.
        </div>
      </div>
    </div>
  );
};

export default Footer;
