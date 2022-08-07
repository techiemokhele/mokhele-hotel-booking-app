import React from "react";
import "./FeaturedLovedProperties.css";

const FeaturedLovedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/122606713.webp?k=8c0311dd5a41e633506d5fd2db92aaf1b2edd4bd64e194e18648bc4cd7db5242&o=&s=1"
          alt="featured-loved-pic"
          className="fpImage"
        />
        <span className="fpName">Acacia Grove</span>
        <span className="fpCity">Bedfordview, Johannesburg</span>
        <span className="fpPrice">R1,799.99</span>
        <span className="small">3 nights • 2 adults</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="div fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/326888700.webp?k=797fe82f12d73dfb6504962d91050b819509ca7d923cfeb1d2e58f6a75c703c2&o=&s=1"
          alt="featured-loved-pic"
          className="fpImage"
        />
        <span className="fpName">Urban Oasis</span>
        <span className="fpCity">Cape Town CBD, Cape Town</span>
        <span className="fpPrice">R2,590.99</span>
        <span className="small">Getaway deal</span>
        <div className="fpRating">
          <button>8.6</button>
          <span>Good</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/279172043.webp?k=6b62b05fad9fc785826d2b31f8b2eb068aedf33467996f5547529880a84e8870&o=&s=1"
          alt="featured-loved-pic"
          className="fpImage"
        />
        <span className="fpName">Lilian Lofts</span>
        <span className="fpCity">Fordsburg, Johannesburg</span>
        <span className="fpPrice">R3,291.99</span>
        <span className="small">Includes taxes and fees</span>
        <div className="fpRating">
          <button>8.5</button>
          <span>excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/233371734.webp?k=528ae2600a20c43472a706dc25e7724aba427dacd92796b0c8bea67df95e8c00&o=&s=1"
          alt="featured-loved-pic"
          className="fpImage"
        />
        <span className="fpName">Blue Waters</span>
        <span className="fpCity">Golden Mile, Durban</span>
        <span className="fpPrice">R6,154.99</span>
        <span className="small">Breakfast included </span>
        <div className="fpRating">
          <button>8.2</button>
          <span>excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/223755502.webp?k=ce30a233033ef55cb1883dd5c372f9a27abac931bd87d3f3670cd14887504a0f&o=&s=1"
          alt="featured-loved-pic"
          className="fpImage"
        />
        <span className="fpName">Lake Motel</span>
        <span className="fpCity">Hartbeespoort</span>
        <span className="fpPrice">R1,799.99</span>
        <span className="small">3 nights • 2 adults</span>
        <div className="fpRating">
          <button>6.0</button>
          <span>Review score</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedLovedProperties;
