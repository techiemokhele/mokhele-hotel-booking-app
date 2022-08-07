import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faHotel,
  faHouse,
  faMountain,
  faVihara,
} from "@fortawesome/free-solid-svg-icons";
import "./PropertyList.css";

const PropertyList = () => {
  return (
    <div className="propertyList">
      <div className="propertyListItem">
        <img
          src="https://images.unsplash.com/photo-1590447158019-883d8d5f8bc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
          alt="property-pic"
          className="propertyListImage"
        />
        <div className="propertyListTitles">
          <h3>
            <FontAwesomeIcon icon={faHouse} style={{ color: "#0071c2" }} />{" "}
            Hotels
          </h3>
          <h4>888,349 hotels</h4>
        </div>
      </div>
      <div className="propertyListItem">
        <img
          src="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60"
          alt="property-pic"
          className="propertyListImage"
        />
        <div className="propertyListTitles">
          <h3>
            <FontAwesomeIcon icon={faBuilding} style={{ color: "#0071c2" }} />{" "}
            Apartments
          </h3>
          <h4>916,098 apartments</h4>
        </div>
      </div>
      <div className="propertyListItem">
        <img
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmlsbGFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60"
          alt="property-pic"
          className="propertyListImage"
        />
        <div className="propertyListTitles">
          <h3>
            <FontAwesomeIcon icon={faHotel} style={{ color: "#0071c2" }} />{" "}
            Resort
          </h3>
          <h4>18,113 resort</h4>
        </div>
      </div>
      <div className="propertyListItem">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dmlsbGFzJTIwd2l0aCUyMHBvb2x8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
          alt="property-pic"
          className="propertyListImage"
        />
        <div className="propertyListTitles">
          <h3>
            <FontAwesomeIcon icon={faVihara} style={{ color: "#0071c2" }} />{" "}
            Villas
          </h3>
          <h4>478,435 villas</h4>
        </div>
      </div>
      <div className="propertyListItem">
        <img
          src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhYmluc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60"
          alt="property-pic"
          className="propertyListImage"
        />
        <div className="propertyListTitles">
          <h3>
            {" "}
            <FontAwesomeIcon
              icon={faMountain}
              style={{ color: "#0071c2" }}
            />{" "}
            Cabins
          </h3>
          <h4>36,400 cabins</h4>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
