import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

//import components
import Header from "../../components/constant/Header/Header";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Subscribe from "../../components/Subscribe/Subscribe";
import Footer from "../../components/constant/Footer/Footer";

//import styles
import "./SingleHotelPage.css";

const SingleHotelPage = () => {
  //dummy data images
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1600585154166-d8897c8f930d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1600563440091-ab11f30e01d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1604014238170-4def1e4e6fcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    },
  ];

  return (
    <div>
      <NavigationBar />
      <Header type="list" />

      {/*selected hotel content*/}
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Reserve</button>
          <h1 className="hotelTitle">Odyssey Luxury Apartments</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Modder East Springs 1559 Gauteng</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 13.4 km from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over R939.99 at this property and get a free airport
            taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo) => (
              <div className="hotelImgWrapper">
                <img
                  src={photo.src}
                  alt="hotel-pic-spec"
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailText">
              <h1 className="hotelTitle">Stay in the heart of Sandton</h1>
              <p className="hotelDescription">
                Odyssey offers luxury accommodations in Sandton, just 500 m walk
                from Morningside Shopping Center. Free WiFi and private parking
                is available. The modern units are equipped with contemporary
                furnishings and feature air conditioning, a patio or balcony and
                a flat-screen TV. The Executive Apartments have a lounge area, a
                fully equipped kitchen and a washing machine. The apartments are
                serviced daily by housekeeping. Restaurants are located within
                walking distance. The property is 9 minutes’ drive from Gautrain
                Sandton Station and O.R. Tambo International Airport can be
                reached within 30 minutes by car. Couples in particular like the
                location – they rated it 8.6 for a two-person trip.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 5-night stay!</h1>
              <span>
                Odyssey offers luxury accommodations in Sandton, just 1640 feet
                walk from Morningside Shopping Center. Free WiFi and private
                parking is available.
              </span>
              <h2>
                <b>R4,699.99</b> (5 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <Subscribe />
        <Footer />
      </div>
    </div>
  );
};

export default SingleHotelPage;
