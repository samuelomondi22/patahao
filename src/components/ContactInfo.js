import React from "react";
import Title from "./Title";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoIosCall,
  IoMdMail,
  IoLogoTwitter
} from "react-icons/io";

const ContactInfo = () => {
  return (
    <article className="services">
      <Title title="ContactInfo" />
      <p>
        If you are interested in renting or getting a rental to stay in, look no
        further. Underneath are information on how to get in contact with us. Be sure to use any 
        the platform to get a a room/house or to sell off;
      </p>
      <br />
      <div>
        <span className='space'>
        <a href="https://www.facebook.com/pata.hao.75">
          {" "}
          <IoLogoFacebook />
        </a>
        </span>
        <span className='space'>
        <a href="https://www.instagram.com/pataahaoo/">
          <IoLogoInstagram />
        </a>
        </span>
        <span className='space'>
        <a href="https://twitter.com/patahao1">
          <IoLogoTwitter />
        </a>
        </span>
      </div>
      <div className="container">
        <div><IoIosCall /><span className='space'>0762706424</span></div>
        <IoMdMail />
        <span className='space'>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pataahaoo@gmail.com&su=SUBJECT&body=BODY"> pataahaoo@gmail.com</a>
        </span>
      </div>
    </article>
  );
};

export default ContactInfo;
