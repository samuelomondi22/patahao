import React from "react";
import Title from "./Title";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoIosCall,
  IoMdMail,
  IoLogoTwitter
} from "react-icons/io";
import { Link } from "react-router-dom";

const ContactInfo = () => {
  return (
    <article className="services">
      <Title title="ContactInfo" />
      <p>
        If you are interested in renting or getting a rental to stay in, look no
        further. Underneath are information on how to get in contact with us;
      </p>
      <br />
      <div>
        <Link to="/">
          {" "}
          <IoLogoFacebook />
        </Link>
        <Link to="/">
          <IoLogoInstagram />
        </Link>
        <Link to="/">
          <IoLogoTwitter />
        </Link>
      </div>
      <div className="container">
        <IoIosCall /> <p>0741403098</p>
        <IoMdMail />
        <p>omondisam696@gmail.com</p>
      </div>
    </article>
  );
};

export default ContactInfo;
