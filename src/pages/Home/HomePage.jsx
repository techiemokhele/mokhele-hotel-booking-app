import React from "react";

//import custom components
import "./HomePage.css";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Header from "../../components/Header/Header";
import FeaturedHotels from "../../components/FeaturedHotels/FeaturedHotels";
import PropertyList from "../../components/PropertyList/PropertyList";
import FeaturedLovedProperties from "../../components/FeaturedLovedProperties/FeaturedLovedProperties";
import Subscribe from "../../components/Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <Header />

      {/*home content*/}
      <div className="homeContainer">
        <div className="covid">
          <div className="text">
            <p className="textInfo">
              <span className="textIcon">
                <svg
                  height="17"
                  width="17"
                  viewBox="0 0 24 24"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M14.25 15.75h-.75a.75.75 0 0 1-.75-.75v-3.75a1.5 1.5 0 0 0-1.5-1.5h-.75a.75.75 0 0 0 0 1.5h.75V15a2.25 2.25 0 0 0 2.25 2.25h.75a.75.75 0 0 0 0-1.5zM11.625 6a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path>
                </svg>
              </span>
              Get the advice you need. Check the latest COVID-19 restrictions
              before you travel.{" "}
              <a
                href="https://github.com/"
                className="link"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Learn more
              </a>
            </p>
          </div>
        </div>

        {/*add properties*/}
        <FeaturedHotels />

        {/*property types*/}
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />

        {/*guest selection*/}
        <h1 className="homeTitle">Homes our guest love</h1>
        <FeaturedLovedProperties />

        {/*subscribe selection*/}
        <Subscribe />
      </div>
    </div>
  );
};

export default Home;
