import React from 'react'
import './service.scss'
import farming from "../../assests/images/farming1.png";
import group from "../../assests/images/Group.png";
import irrigation from "../../assests/images/Irrigation.png";


const Service = () => {
    const items = [
        {
            image:farming,
            info:'skilled gardenar and technician',
        },
        {
            image:group,
            info:'awesome customer service',
        },
        {
            image:irrigation,
            info:'irrigation and drainage service'
        },
    ]
  return (
    <div className="services">
      <div className="container">
        {items.map((item) => (
          <div className="servicCard">
            <img src={item.image} alt="" />
                <h5>{item.info}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service