import React from "react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoIosCall,
  IoMdMail,
  IoLogoTwitter
} from "react-icons/io";

const ContactInfo = () => {
  return (
      <div className='container'>
    <article
      style={{
        backgroundColor: "darkGrey",
        textAlign: "center",
      }}
    >
        <br/>
      <h4>Room Info</h4>
      <p>Interested in this one? Why not contact to get it?</p>
      <br />
      <div>
        <span className="space">
          <a href="https://www.facebook.com/pata.hao.75">
            {" "}
            <IoLogoFacebook />
          </a>
        </span>
        <span className="space">
          <a href="https://www.instagram.com/pataahaoo/">
            <IoLogoInstagram />
          </a>
        </span>
        <span className="space">
          <a href="https://twitter.com/patahao1">
            <IoLogoTwitter />
          </a>
        </span>
      </div>
      <div className="container">
        <div>
          <IoIosCall />
          <span className="space">0762706424</span>
        </div>
        <IoMdMail />
        <span className="space">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pataahaoo@gmail.com&su=SUBJECT&body=BODY">
            {" "}
            pataahaoo@gmail.com
          </a>
        </span>
      </div>
    </article>
    <br/>
    </div>
  );
};

export default ContactInfo;
