import React, { useState } from "react";
import "./about.css";
import ME from "../../Assets/me-about.jpg";
import about from "../../Assets/about.png";
import projects from "../../Assets/book.png";
import exp from "../../Assets/experience.png";

const About = () => {

  return (
    <section id="about">
      <h2 >About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="ME" />
          </div>
        </div>


        <div className="about__content">

          <div className="about__cards">

            <article className="about__card">
              <img src={about} className="about__icon" />
              <h5>
                Experience
              </h5><small>3+ Years</small>
            </article>

            <article className="about__card">
              <img src={exp} className="about__icon" />
              <h5>
                Clients
              </h5><small>200+</small>
            </article>

            <article className="about__card">
              <img src={projects} className="about__icon" />
              <h5>
                Projects Completed
              </h5> <small>200+</small>
            </article>
          </div>
          <p>jidsajidsaid sajdasid dsajdisajd iajdis iajdis iajdis iajdis asdsaadsadsa dsadasddajsijdsa</p>
          <a href="#contact" className="btn btn-primary"> Let's Talk</a>


        </div>
      </div>
    </section>
  );
};

export default About;
