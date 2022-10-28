import React from "react";
import "./Home.css";
import NavbarHeader from "./../../Components/Navbar/Navbar";
import Picture from "./../../img/Burning Ember-snippet.jpg";

const Home = () => {
  return (
    <div className="home-section">
      <NavbarHeader />
      <div className="container about-section">
        <div className="row about-section">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-image">
              <img src={Picture} alt="Profile" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-details">
              <h1>Welcome</h1>
              <h5>
                I'm glad you took a leap into all the different magical worlds I
                offer. There are many different worlds for you to enjoy. Take a
                seat and browse all the different stories.
              </h5>
              <h5>
                My name is Lola Vargas and I want to share all my stories with you
                there is nothing better than reading a steamy romance or 
                a romantic comic book. Whatever you are here for, I thank you for
                taking a moment to visit my magical worlds.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
