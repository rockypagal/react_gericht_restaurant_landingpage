import React,{useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

export const SmallScreenNavbar = () =>{ 

  const [toggleMenu, setToggleMenu] = useState(false);

  return(
  <>
    <div className="app_navbar-smallScreen">
      <GiHamburgerMenu color="$fff" fontSize={27} onClick={() => setToggleMenu(true)} />
  { toggleMenu  &&   <div className="app_navbar-smallScreen_overlay flex_center slide-bottom">
        <MdOutlineRestaurantMenu fontSize={27} className="overlay_close" onClick={() => setToggleMenu(false)} />
        <ul className="app_navbar-smallScreen-links">
          <li className="p__opensans"><a href="#home">Home</a></li>
          <li className="p__opensans"><a href="#about">About</a></li>
          <li className="p__opensans"><a href="#menu">Menu</a></li>
          <li className="p__opensans"><a href="#award">Awards</a></li>
          <li className="p__opensans"><a href="#contact">Contact</a></li>
        </ul>
      </div> 
      } 
    </div>
  </>
)};
