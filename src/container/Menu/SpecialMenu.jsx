import React from "react";
import { images, data } from "../../constants";
import "./SpecialMenu.css";
import { MenuItem, SubHeading } from "../../components";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title ">
      <SubHeading title="Menu That Fits Your Palette" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu_menu_heading">Wine & Bear</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((items, index) => (
            <MenuItem {...items} key={items.title+index} />
          ))}
        </div>
      </div>
      <div className="app__specialMenu-menu_img">
        <img src={images.menu} />
      </div>
      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu_menu_heading">Cocktails</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((items, index) => (
                 <MenuItem {...items} key={items.title+index} />
          ))}
        </div>
      </div>
    </div>
    <div style={{marginTop:'15px'}}>
      <button className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
