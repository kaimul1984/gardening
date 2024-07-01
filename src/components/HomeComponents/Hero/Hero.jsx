
import Button from "../../../constant/Button/Button";
import "./hero.scss";
import { FaLongArrowAltRight } from "react-icons/fa";
import review1 from "../../../assests/images/review1.jpg";
import review2 from "../../../assests/images/review2.png";
import review3 from "../../../assests/images/review3.jpg";
import review4 from "../../../assests/images/review4.png";
import star from "../../../assests/images/star.png";
import img_1 from "../../../assests/images/right.png";
import img3 from "../../../assests/images/img3.png";


const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="left">
          <div className="content">
            <h2>
              planting a <span>garden</span> 
            </h2>
            <h2>is </h2>
            <h2>similar to believe </h2>
            <h2> in tomorrow</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
              iusto ipsam blanditiis eveniet animi, quo aperiam ad erd
            </p>
            <div className="cta">
              <Button name="Get a quote" />
              <span>
                see how its work <FaLongArrowAltRight />
              </span>
            </div>
            <div className="review">
              <div className="image">
                <div>
                  <img src={review1} alt="img1" />
                </div>
                <div>
                  <img src={review3} alt="img2" />
                </div>
                <div>
                  <img src={review1} alt="img3" />
                </div>
                <div>
                  <img src={review3} alt="img4" />
                </div>
              </div>
              <div className="ratings">
                <h3>our happy customer</h3>
                <div className="star">
                  <img src={star} alt="" />
                  <h5>
                    4.8 <span>(12.5k Reviews)</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="right-img-1">
            <img src={img_1} alt="" />
          </div>
          <div className="div1"></div>
          <div className="div2"></div>
          <div className="card">
            <div className="box">
              <p>landscaping</p>
            </div>
            <div className="box">
              <p>lawn maintanace</p>
            </div>
            <div className="box">
              <p>puring plants</p>
            </div>
            <div className="box">
              <p>irrigation&pressings</p>
            </div>
          </div>
          <div className="line">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="right-img-2">
        <img src={img3} alt="" />
      </div>
    </div>
  );
}

export default Hero