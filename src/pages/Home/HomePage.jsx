import React from "react";

//import custom components
import "./HomePage.css";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <Header />
    </div>
  );
};

export default Home;
