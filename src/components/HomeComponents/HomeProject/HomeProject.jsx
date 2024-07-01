import { useState } from "react";

import "./homeProject.scss";
import SingleProject from "./SingleProject";
import projectsdata from "./projectsdata";

const HomeProject = () => {
  const [activeFilter, setActiveFilter] = useState("view all");
  const [filterItem, setFilterItem] = useState(projectsdata);
  const [projects, setProjects] = useState(projectsdata);
  const [animation, setAnimation] = useState({ transform: "scale(1)" });


  const handleClickFilter = (item) => {
    setActiveFilter(item)
    setAnimation({ transform: 'scale(0)' })
    
    setTimeout(() => {
      setAnimation({ transform: "scale(1)" });
      
      if (item === 'view all') {
        setFilterItem(projectsdata)
        setProjects(projectsdata)
      } else {
        const filteredProject = projects.filter((project) => project.tag.includes(item));
        setFilterItem(filteredProject);
      }
        

    }, 200)
  }

  return (
    <div className="homeProject">
      <div className="container">
        <div className="heading">
          <h6>latest projects</h6>
          <h2>
            <span className="span">introduce</span> some project
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book..
          </p>
        </div>
        <div className="catagories">
          {[
            "view all",
            "garden care",
            "lawn care",
            "planting",
            "landscape",
          ].map((item, index) => (
            <div
              className={activeFilter === item ? "tab-item active" : "tab-item"}
              onClick={()=> handleClickFilter(item)}
              key={item.id}>
              {item}
            </div>
          ))}
        </div>
        <div className="projects">
          {filterItem.map((data, index) => (
            <SingleProject
              key={data.id}
              image={data.image}
              heading={data.heading}
              desc={data.desc}
              desc2={data.desc2}
              style={{ transform: animation.transform, transition: "transform .5s"}}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeProject;

