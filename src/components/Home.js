import React from "react";
import Hero from "./Hero";
import Banner from "./Banner";
import { Link } from "react-router-dom";
import Services from "./Services";
import FeaturedRooms from "./FeaturedRooms";
import ContactInfo from "./ContactInfo";
import Foooter from "./Foooter";

const Home = () => {
  return (
    <>
      <Hero>
        <Banner title="pata hao" subtitle="find affordable houses">
          <Link to="/rooms" style={{ color: "green" }}>
            Houses and Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
      <ContactInfo />
      <br />
      <Foooter />
      <br />
    </>
  );
};

export default Home;
