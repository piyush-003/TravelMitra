import React, { useEffect } from "react";
import "./Footer.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import video3 from "../../assets/video3.mp4";
import { FiSend } from "react-icons/fi";
import "./Footer.scss";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video3} loop autoPlay muted type="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input
              type="text"
              data-aos="fade-up"
              placeholder="Enter Email Adress"
            />
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND
              <FiSend className="icon" />
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon" />
                Travel.
              </a>
            </div>
            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              perferendis quia enim id similique quas voluptates saepe at dicta
              et tenetur praesentium perspiciatis amet sed nam quasi, officia
              sequi sit.
            </div>
            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>
          <div className="footerLinks grid">
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="linkGroup"
            >
              <span className="groupTitle">OUR AGENCY.</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle">PARTNERS</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                PARTNER
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                BOOKINGS
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                RENT CARS
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                TRIVAGO
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                TRIP ADVISOR
              </li>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              className="linkGroup"
            >
              <span className="groupTitle">LAST MINUTE.</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                LAST MINUTE
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                LONDON
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                CALIFORNIA
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                INDONESIA
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                EUROPE
              </li>
            </div>
          </div>
          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED</small>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
