import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../Assets/me.jpg";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Daniyal Khan</h1>
        <h5>This might be the worse coding I've ever seen, but this is just for learning :)</h5>
        <CTA />
      <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me" className="" />
        </div>

        <a href="#contact" className="scroll__down"> Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
