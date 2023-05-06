import React from "react";
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const Footer = () => {
  let ob = new Date();
  let year = ob.getFullYear();
  return (
    <div className="app__footer section__padding">
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links">
        <div className="app__footer-links_contacts">
          <h1 className="app__footer-headtext">Content Us</h1>
          <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="p__opensans">+1 212-344-1230</p>
          <p className="p__opensans">+1 212-344-1230</p>
        </div>
        <div className="app__footer-links_logo">
          <img src={images.gericht} />
          <p className="p__opensans">
            "The Best Way To Find Yourself Is To Lose Yourself In The Service Of
            Others."
          </p>
          <img
            src={images.spoon}
            className="spoon__img"
            style={{ marginTop: 15 }}
          />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiInstagram />
            <FiTwitter />
          </div>
        </div>
        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Monday-Friday:</p>
          <p className="p__opensans">08:00 Am - 12:00 Am</p>
          <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans">07:00 Am - 11:00 Pm</p>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="p__opensans" >
          {year} Rathod Umang. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
