import React, { useState } from "react";
import "./about.css";
import ME from '../../Assets/me-about.jpg'

const About = () => {
  const [num, setNum] = useState(0);

  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="about__me">
        <div className="aboutme-image">
          <img src={ME} alt="ME" />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
<h5><small>3+ Years</small></h5>
          </article>
        </div>
        </div>
    </section>
  );
};

export default About;
