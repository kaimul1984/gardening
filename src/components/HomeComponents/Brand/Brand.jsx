import "./brand.scss";
import brand1 from "../../../assests/images/brand1.png";
import logo1 from "../../../assests/images/logo1.png";
import logo2 from "../../../assests/images/logo2.png";
import logo3 from "../../../assests/images/logo3.png";
//import brand1 from '../../../assests/images/brand1.png'
const Brand = () => {
  return (
    <div className="brand">
      <div className="container">
        <div className="box">
          <img src={brand1} alt="" />
        </div>
        <div className="box2">
          <div className="box1">
            <img src={logo2} alt="" />
          </div>
          <div className="box1">
            <img src={logo1} alt="" />
          </div>
          <div className="box1">
            <img src={logo3} alt="" />
          </div>
          <div className="box1">
            <img src={logo2} alt="" />
          </div>
          <div className="box1">
            <img src={logo1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
