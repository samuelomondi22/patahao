import React from "react";
import Hero from "./Hero";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import RoomContainer from "./RoomContainer";

const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="House Rooms">
          <Link to="/" style={{ color: "green" }}>
            Return Home
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </>
  );
};

export default Rooms;
