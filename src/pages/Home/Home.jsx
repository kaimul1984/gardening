import React from "react";

import "./home.scss";

import Hero from "../../components/HomeComponents/Hero/Hero";
import Service from "../../components/ServiceCard/Service";
import HomeAbout from "../../components/HomeComponents/HomeAbout/HomeAbout";
import Brand from "../../components/HomeComponents/Brand/Brand";
import HomeProject from "../../components/HomeComponents/HomeProject/HomeProject";
import HomeExpert from "../../components/HomeComponents/HomeExpert/HomeExpert";
import TeamMember from "../../components/TeamMember/TeamMember";
import Universal from "../../components/Universal/Universal";
//import Footer from "../../components/Footer/Footer";
import Blog from "../../components/Blog/Blog";
import Testimonial from "../../components/Testimonials/Testimonial";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Service />
      <HomeAbout />
      <Brand />
      <HomeProject />
      <HomeExpert />
      <TeamMember />
      <Universal />
      <Testimonial />
      <Blog />
   
    </div>
  );
};

export default Home;
