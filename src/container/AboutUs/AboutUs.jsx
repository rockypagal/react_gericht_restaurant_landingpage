import React from 'react';
import {images} from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className="app__aboutus-overlay flex__center ">
      <img src={images.G}  />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} className='spoon__img' />
        <p className='p__opensans'>Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aspernatur. sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet. Natus, impedit?Lorem ipsum dolor sit amet.</p>
        <button className='custom__button'>Know More</button>
      </div>

      <div className="aboutus-content_knife flex__center">
        <img src={images.knife} />
      </div>


       <div className="app__aboutus-history">
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} className='spoon__img' />
        <p className='p__opensans'>Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aspernatur. sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet. Natus, impedit?Lorem ipsum dolor sit amet.</p>
        <button className='custom__button'>Know More</button>
      </div>
      

    </div>
  </div>
);

export default AboutUs;
