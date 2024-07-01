import React from 'react'
import Banner from '../../constant/Banner/Banner';

import './about.scss'
import about1 from '../../assests/images/about1.png'
import about2 from '../../assests/images/about2.png'
import mission1 from '../../assests/images/mission1.png'
import mission2 from '../../assests/images/mission2.png'
import mission3 from '../../assests/images/mission3.png'
import mission4 from '../../assests/images/mission4.png'
import our_skill from '../../assests/images/our_skill.png'
import Staff from '../../components/Staff/Staff';
import Brand from '../../components/HomeComponents/Brand/Brand';

const About = () => {
  const items = [
    {
      image: mission4,
      info: "our mission",
    },
    {
      image: mission3,
      info: "our vission",
    },
    {
      image: mission2,
      info: "our support",
    },
    {
      image: mission1,
      info: "our team",
    },
  ];
  return (
    <div className="about">
      <Banner name="about us" />

      <div className="container">
        <h2>about company</h2>
        <div className="wrapper">
          <div className="left">
            <div className="img1">
              <img src={about2} alt="" />
            </div>
            <div className="img2">
              <img src={about1} alt="" />
            </div>
          </div>
          <div className="right">
            <div className="content">
              <h2>
                <span className="span">
                  25+ years of experience in <br /> gardening & landscaping
                </span>
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it make a type specimen book.
              </p>
              <p>
                orem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it make a type specimen book. Lorem Ipsum
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled.
              </p>
              <div className="bottom">
                {items.map((item) => (
                  <div className="group" key={item.info}>
                    <div className="icon">
                      <img src={item.image} alt="" />
                    </div>
                    <h5>{item.info}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="about-us">
          <div className="description">
            <h3>mission</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              adipiscing erat eget risus sollicitudin pellentesque et non erat.
              Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan
              ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc
              posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Nam scelerisque tristique dolor vitae tincidunt. Aenean quis
              massa uada mi elementum elementum. Nec sapien convallis vulputate
              rhoncus vel dui.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              adipiscing erat eget risus sollicitudin pellentesque et non erat.
              Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan
              ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc
              posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Integer adipiscing erat eget risus sollicitudin pellentesque
              et non erat. Maecenas nibh dolor, malesuada et bibendum a,
              sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien,
              nec tincidunt nunc posuere ut.
            </p>
          </div>
          <div className="description">
            <h3>vission</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              adipiscing erat eget risus sollicitudin pellentesque et non erat.
              Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan
              ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc
              posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Nam scelerisque tristique dolor vitae tincidunt. Aenean quis
              massa uada mi elementum elementum. Nec sapien convallis vulputate
              rhoncus vel dui.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              adipiscing erat eget risus sollicitudin pellentesque et non erat.
              Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan
              ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc
              posuere ut.
            </p>
          </div>
          <div className="description">
            <h3>goal</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              adipiscing erat eget risus sollicitudin pellentesque et non erat.
              Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan
              ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc
              posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Nam scelerisque tristique dolor vitae tincidunt. Aenean quis
              massa uada mi elementum elementum. Nec sapien convallis vulputate
              rhoncus vel dui.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              adipiscing erat eget risus sollicitudin pellentesque et non erat.
              Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan
              ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc
              posuere ut.
            </p>
          </div>
        </div>
        <div className="our-skills">
          <div className="left-content">
            <h3>our skills</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
            <div className="reviews">
              <div className="content-1">
                <div>
                  <span>500+</span>
                </div>
                <h5>
                  happy <br /> customers
                </h5>
              </div>
              <div className="content-1">
                <div>
                  <span>800+</span>
                </div>
                <h5>
                  Garden <br /> created
                </h5>
              </div>
              <div className="content-1">
                <div>
                  <span>500+</span>
                </div>
                <h5>
                  team <br /> members
                </h5>
              </div>
            </div>
            <div className="skill-bar">
              <div className="bar">
                <h5>Garden care</h5>
               <div className='label'/>
              </div>
              <div className="bar">
                <h5>lawn care</h5>
               <div className='label'/>
              </div>
              <div className="bar">
                <h5>tree plantation</h5>
               <div className='label'/>
              </div>
              <div className="bar">
                <h5>pest control</h5>
               <div className='label'/>
              </div>
              <div className="bar">
                <h5>weeds control</h5>
               <div className='label'/>
              </div>
            </div>
          </div>
          <div className="right-content">
            <div className="img1">
              <img src={our_skill} alt="" />
            </div>
          </div>
        </div>
        <div className="staff-member">
          <Staff />
        </div>
        <Brand />
      </div>
    </div>
  );
}

export default About