import React from "react";

import "./Gallery.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";

// import {
//   BsInstagram,
//   BsArrowLeftShorts,
//   BsArrowRightShorts,
// } from "react-icons/bs";

const Gallery = () => {
  const scrollRef = React.useRef(null);
  const Photo = [images.gallery04,images.gallery02,images.gallery03,images.gallery01,];
  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    }

    if (direction === "right") {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          {" "}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt,
          maiores ab. Quibusdam consequuntur soluta aut porro. Similique, nobis
          amet deserunt, odit molestias fugiat officia enim praesentium
          reprehenderit, quaerat nisi numquam.{" "}
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
        {
          Photo.map((items,index)=>(
            <div className="app__gallery-images_card flex__center" key={`gallery_image${index}`} >
              <img src={items} alt="" />
              {/* <p className="p__cormorant gallery__images-icon">Instagram</p> */}
            </div>
          ))
        }
        </div>
        <div className="app__gallery-images___arrow-icon">
       <svg stroke="currentColor" fill="currentColor" onClick={() => scroll("left")}  strokeWidth="0" viewBox="0 0 16 16" className="gallery__arrow-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"></path></svg>
        <svg stroke="currentColor" fill="currentColor" onClick={() => scroll("right")} strokeWidth="0" viewBox="0 0 16 16" className="gallery__arrow-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"></path></svg>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
