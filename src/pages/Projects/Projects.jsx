import React from 'react'
import './projects.scss'

import HomeProject from '../../components/HomeComponents/HomeProject/HomeProject'
import Universal from '../../components/Universal/Universal'
import Banner from '../../constant/Banner/Banner'
import InfiniteSlider from '../../constant/InfiniteSlider/InfiniteSlider'

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="projects">
      <Banner name="projects" />
      <div className="home_projects">
        <HomeProject />
        <div className="pagination">
         <button><FaChevronLeft /></button>
         <button>1</button>
         <button>2</button>
         <button>3</button>
         <button><FaChevronRight /></button>
        </div>
      </div>
      <Universal />
      <InfiniteSlider />
    </div>
  );
}

export default Projects