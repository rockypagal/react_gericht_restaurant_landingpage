import React from "react";
import { images } from "../../constants";
import "./Header.css";
import { SubHeading } from "../../components";


const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the New Flavour" />
      <h1 className="app_header-h1"> The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Sit tellus loborits sed senectus vivamus molestie. dolor sit amet
        consectetur adipisicing elit. Commodi maxime velit accusantium earum
        provident repellat qui dolor, tenetur Lorem ipsum dolor sit amet.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} />
    </div>
  </div>
);

export default Header;
