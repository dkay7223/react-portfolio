import React from "react";
import "./navbar.css";
import home from "../../Assets/home.png";
import exp from "../../Assets/experience.png";
import about from "../../Assets/book.png";
import services from "../../Assets/service.png";
import tests from "../../Assets/user.png";
import contact from '../../Assets/message.png'

const Navbar = () => {
  return (
    <div>
      <nav>
        <a href="#">
          <img src={home} alt="" />
        </a>
        <a href="#about">
          <img src={about} alt="" />
        </a>
        <a href="#experience">
          <img src={exp} alt="" />
        </a>
        <a href="#services">
          <img src={services} alt="" />
        </a>
        <a href="#portfolio">
          <img src={tests} alt="" />
        </a>
        <a href="#contact">
          <img src={contact} alt="" />
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
