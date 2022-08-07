import React from "react";
import "./FeaturedHotels.css";

const FeaturedHotels = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="feature-pic"
          className="featuredImage"
        />
        <div className="featuredTitles">
          <h2>Dublin</h2>
          <h3>123 Sesame Street</h3>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60"
          alt="feature-pic"
          className="featuredImage"
        />
        <div className="featuredTitles">
          <h2>Soweto Tours</h2>
          <h4>2332 Orlando West Street</h4>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60"
          alt="feature-pic"
          className="featuredImage"
        />
        <div className="featuredTitles">
          <h2>Modder East</h2>
          <h4>34 Sesame Street</h4>
        </div>
      </div>
    </div>
  );
};

export default FeaturedHotels;
