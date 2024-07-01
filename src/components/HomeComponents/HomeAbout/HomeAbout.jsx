import React from 'react'
import './homeAbout.scss'
import Button from '../../../constant/Button/Button';
import aboutImg from '../../../assests/images/about.png'
import group7 from '../../../assests/images/group7.png'

const HomeAbout = () => {
  return (
    <div className="homeAbout">
      <div className="container">
        <div className="left">
          <div className='bg'/>
          <div className="img">
            <img src={aboutImg} alt="" />
          </div>
        </div>
        <div className="right">
          <h6>about us</h6>
          <h2>
            we are <span className="span">professional gardener </span>
            <br /> & <span className="span">lawn service</span>
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book.Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
          </p>
          <Button name="get a quote" />
        </div>
      </div>
      <div className="outer-img">
        <img src={group7} alt="" />
      </div>
    </div>
  );
}

export default HomeAbout