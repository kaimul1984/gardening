import React from 'react'
import './singleProject.scss'
import { FaChevronRight } from "react-icons/fa";
import project_1 from "../../../assests/images/project_1.png";


const SingleProject = ({image,heading,desc,desc2, style}) => {

   


  return (
    <div className="single-project" style={style}>
      <div className="content">
        <div className="image">
          <img src={image} alt="project-1" />
        </div>
        <div className="desc">
          <h5>{heading}</h5>
          <p>
            {desc}
          </p>
        </div>
      </div>
      <div className="hover-effect">
        <div className="top">
          <h5>{heading}</h5>
          <p>
            {desc2}
          </p>
              </div>
              <div className="bottom">
                  <div className="arrow"><FaChevronRight /></div>
                  <hr />
              </div>
      </div>
    </div>
  );
}

export default SingleProject