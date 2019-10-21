import React from "react";
import { Link } from "react-router-dom";
//check if props has been passed
import PropTypes from "prop-types";

const Room = ({ room }) => {
  const { name, slug, images, price } = room;

  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0]} alt="single room" />
        <div className="price-top">
          <h6>KES{price}</h6>
          <p>per month</p>
        </div>
      </div>
      <p className="room-info">
        <Link to={`/rooms/${slug}`}>{name}</Link>
      </p>
    </article>
  );
};

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};

export default Room;
