import  './contact.scss'
import Banner from "../../constant/Banner/Banner";

import { FaPhoneAlt, FaEnvelopeOpenText, FaPeriscope } from "react-icons/fa";

import facebook from "../../assests/images/facebook.png";
import twitter from "../../assests/images/twitter.png";
import linkedin from "../../assests/images/linkedin.png";
import pinterest from "../../assests/images/pinterest.png";
import InfiniteSlider from '../../constant/InfiniteSlider/InfiniteSlider';
import Universal from '../../components/Universal/Universal';


const Contact = () => {
  return (
    <div className="contact">
      <Banner name="contact" />

      <div className="container">
        <div className="left">
          <h2>contact us</h2>

          <form action="">
            <div className="name">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="email">
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Phone No." />
            </div>
            <div className="subject">
              <input type="text" placeholder="Subject" />
            </div>
            <div className="textarea">
              <textarea
                name="text"
                id="text"
                placeholder="Write a message"
                cols="30"
                rows="12"></textarea>
            </div>
            <div className="submit">
              <input type="submit" />
            </div>
          </form>
        </div>
        <div className="right">
          <div className="content">
            <h2>get in touch</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printingand typesetting
              industry. Lorem Ipsum has been the industry.
            </p>

            <div className="call">
              <FaPhoneAlt />
              <span>+01 123456789, 1234567890</span>
            </div>
            <div className="email">
              <FaEnvelopeOpenText />
              <span>Plantingservice@gmail.com</span>
            </div>
            <div className="location">
              <FaPeriscope />
              <span>2072 Pinnickinick Street, WA 98370</span>
            </div>
            <div className="social">
              
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={pinterest} alt="" />
                <img src={linkedin} alt="" />
              
            </div>
          </div>
        </div>
      </div>
      <Universal />
      <InfiniteSlider />
    </div>
  );
};

export default Contact;
