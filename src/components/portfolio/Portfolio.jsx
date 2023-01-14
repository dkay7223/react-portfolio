import React from "react";
import pf1 from "../../Assets/portfolio1.jpg";
import pf2 from "../../Assets/portfolio2.jpg";
import pf3 from "../../Assets/portfolio3.jpg";
import pf4 from "../../Assets/portfolio4.jpg";
import pf5 from "../../Assets/portfolio5.png";
import pf6 from "../../Assets/portfolio6.jpg";
import "./portfolio.css";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pf1} alt="" />
          </div>
          <h3>This is a portfolio Item Title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" target="__blank" className="btn">
              Github
            </a>
            <a
              href="https://dribble.com/Alien_pixels"
              target="__blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pf2} alt="" />
          </div>
          <h3>This is a portfolio Item Title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" target="__blank" className="btn">
              Github
            </a>
            <a
              href="https://dribble.com/Alien_pixels"
              target="__blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pf3} alt="" />
          </div>
          <h3>This is a portfolio Item Title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" target="__blank" className="btn">
              Github
            </a>
            <a
              href="https://dribble.com/Alien_pixels"
              target="__blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pf4} alt="" />
          </div>
          <h3>This is a portfolio Item Title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" target="__blank" className="btn">
              Github
            </a>
            <a
              href="https://dribble.com/Alien_pixels"
              target="__blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pf5} alt="" />
          </div>
          <h3>This is a portfolio Item Title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" target="__blank" className="btn">
              Github
            </a>
            <a
              href="https://dribble.com/Alien_pixels"
              target="__blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pf6} alt="" />
          </div>
          <h3>This is a portfolio Item Title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" target="__blank" className="btn">
              Github
            </a>
            <a
              href="https://dribble.com/Alien_pixels"
              target="__blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
