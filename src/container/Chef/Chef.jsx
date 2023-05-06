import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__wrapper app__bg section__padding'>
   <div className="app__wrapper_img app__wrapper_img-revers" >
    <img src={images.chef}  />
   </div>
   <div className="app__wrapper_info chefs__word">
    <SubHeading title="Chef's Word"/>
    <h1 className='headtext__cormorant'>
      What We Believe In
    </h1>
    <div className="app__chef-content">
      <div className="app__chef-content_quotes">
        <img src={images.quote}  />
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum iste dolore quo quibusdam impedit dolorem sit ,</p>
      </div>
      <p className='p__opensans'>Dolor, sit amet consectetur adipisicing elit. Explicabo inventore quibusdam aspernatur doloremque adipisci libero dolores ut reiciendis, consequatur repellendus et soluta! Fugit, nobis harum officiis maiores illo soluta eveniet.</p>
    </div>
    <div className="app__chef-sign">
      <p className='p__opensans'>Kevin Luo</p>
      <p className='p__opensans'>Chef & founder</p>
      <img src={images.sign} alt="" />
    </div>
   </div>
  </div>
);

export default Chef;
