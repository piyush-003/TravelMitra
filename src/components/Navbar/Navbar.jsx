import React from "react";
import "./Navbar.css";
import "./Navbar.scss";
import { useState } from "react";

import { TbGridDots } from "react-icons/tb";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdOutlineTravelExplore } from "react-icons/md";
const Navbar = () => {
  const [Active, setActive] = useState("navbar");
  const showNav = () => {
    setActive("navbar activeNavbar");
  };
  const removeNav = () => {
    setActive("navbar");
  };
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <MdOutlineTravelExplore className="icon" />
              Travel Mitra.
            </h1>
          </a>
        </div>
        <div className={Active}>
          <ul className="navlists flex">
            <li className="navitems">
              <a href="#" className="navlink">
                Home
              </a>
            </li>
            <li className="navitems">
              <a href="#" className="navlink">
                Packages
              </a>
            </li>
            <li className="navitems">
              <a href="#" className="navlink">
                Shop
              </a>
            </li>
            <li className="navitems">
              <a href="#" className="navlink">
                About
              </a>
            </li>
            <li className="navitems">
              <a href="#" className="navlink">
                Pages
              </a>
            </li>
            <li className="navitems">
              <a href="#" className="navlink">
                News
              </a>
            </li>
            <li className="navitems">
              <a href="#" className="navlink">
                Contact
              </a>
            </li>
            <button className="btn">
              <a href="#">Book Now</a>
            </button>
          </ul>
          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};
export default Navbar;
