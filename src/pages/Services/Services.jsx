import React from "react";
import Banner from "../../constant/Banner/Banner";
import "./services.scss";
import mission1 from "../../assests/images/mission1.png";
import whychooseus from "../../assests/images/whychooseus.png";
import img1 from "../../assests/images/Consultation.png";
import img2 from "../../assests/images/Design.png";

import InfiniteSlider from "../../constant/InfiniteSlider/InfiniteSlider";
import Staff from "../../components/Staff/Staff";
import Button from "../../constant/Button/Button";

import { TbCornerUpRightDouble } from "react-icons/tb";

const Services = () => {
  const items = [
    {
      image: mission1,
      name: "grass cutting",
      info: "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
    },
    {
      image: mission1,
      name: "garden design",
      info: "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
    },
    {
      image: mission1,
      name: "plant growing",
      info: "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
    },
    {
      image: mission1,
      name: "tree planting",
      info: "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
    },
    {
      image: mission1,
      name: "flower scaping",
      info: "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
    },
    {
      image: mission1,
      name: "branch cutting",
      info: "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
    },
    {
      image: mission1,
      name: "pests, weeds control",
      info: "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
    },
    {
      image: mission1,
      name: "watering & irrigation",
      info: "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
    },
  ];

  return (
    <div className="services">
      <Banner name="services" />
      {/* service we provide */}
      <div className="wrapper">
        <div className="services-provide">
          <h2>
            service <span className="span">we provide</span>{" "}
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took of type and
            scrambled it to make a type specimen book.
          </p>
          <div className="cards">
            {items.map((item) => (
              <div className="card" key={item.name}>
                <img src={item.image} alt="" />
                <h5>{item.name}</h5>
                <p>{item.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* service we provide */}

      {/* why choose us */}
      <div className="why-choose-us">
        <div className="content">
          <div className="left">
            <h2>why choose us</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="attributes">
              <div className="attribute">
                <div className="tick">
                  <TbCornerUpRightDouble />
                </div>
                <h5>proper take care</h5>
              </div>
              <div className="attribute">
                <div className="tick">
                  <TbCornerUpRightDouble />
                </div>
                <h5>expert farmer</h5>
              </div>
              <div className="attribute">
                <div className="tick">
                  <TbCornerUpRightDouble />
                </div>
                <h5>clean working</h5>
              </div>
              <div className="attribute">
                <div className="tick">
                  <TbCornerUpRightDouble />
                </div>
                <h5>home gardening</h5>
              </div>
            </div>
            <Button name="discover more" />
          </div>
          <div className="right">
            <img src={whychooseus} alt="" />
          </div>
        </div>
      </div>
      {/* why choose us */}

      {/* working process */}
      <div className="working-process">
        <div className="contents">
          <h2>
            working <span className="span">process</span>
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took of type and
            scrambled it to make a type specimen book.
          </p>
          <div className="cards">
            <div className="card">
              <div className="icon">
                <img src={img1} alt="" />
                <span>1</span>
              </div>
              <h5>consultation</h5>
              <p>
                Lorem Ipsum is simply dummy of the printing and typesetting test
                industry. Lorem Ipsum has been the industry's standard.
              </p>
            </div>
            <div className="card">
              <div className="icon">
                <img src={img2} alt="" />
                <span>2</span>
              </div>
              <h5>disign & work</h5>
              <p>
                Lorem Ipsum is simply dummy of the printing and typesetting test
                industry. Lorem Ipsum has been the industry's standard.
              </p>
            </div>
            <div className="card">
              <div className="icon">
                <img src={img2} alt="" />
                <span>3</span>
              </div>
              <h5>maintenance</h5>
              <p>
                Lorem Ipsum is simply dummy of the printing and typesetting test
                industry. Lorem Ipsum has been the industry's standard.
              </p>
            </div>
            <div className="card">
              <div className="icon">
                <img src={img2} alt="" />
                <span>4</span>
              </div>
              <h5>complete</h5>
              <p>
                Lorem Ipsum is simply dummy of the printing and typesetting test
                industry. Lorem Ipsum has been the industry's standard.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* working process */}

      {/* cta */}
      <div className="cta">
        <div className="container">
          <div className="content">
            <h4>
              Our Best Reliable Gardening <br /> and Lawn services
            </h4>
            <Button name="call us" />
          </div>
        </div>
      </div>
      {/* cta */}
      <Staff />
      <InfiniteSlider />
    </div>
  );
};

export default Services;
