import React, { useRef } from "react";
import gh from "../../Assets/gh.png";
import fb from "../../Assets/fb.png";
import linkedin from "../../Assets/in.png";
import mail from "../../Assets/mail.png";
import emailjs from "emailjs-com";

import "./contact.css";
const Contact = () => {


  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_1731m6e",
      "template_4dfxb9v",
      form.current,
      "8apoIBONklzPRu-sZ"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact_option">
            <img alt="" src={mail} className="img" />
            <h4>Email</h4>
            <h5>dkwork0000@gmail.com</h5>
            <a href="mailto:dkwork0000@gmail.com" target="__blank">
              <u>Open email</u>
            </a>
          </article>

          <article className="contact_option">
            <img alt="" src={linkedin} className="img" />
            <h4>LinkedIn</h4>
            <h5> Daniyal Khan</h5>
            <a
              href="https://www.linkedin.com/in/daniyal-khan-6261b0254/"
              target="__blank"
            >
              Open LinkedIn
            </a>
          </article>

          <article className="contact_option">
            <img alt="" src={gh} className="img" />
            <h4>Github</h4>
            <h5>dkay7223</h5>
            <a href="https://github.com/dkay7223" target="__blank">
              Open Github
            </a>
          </article>

          <article className="contact_option">
            <img alt="" src={fb} className="img" />
            <h4>Facebook</h4>
            <h5>Daniyal Khan</h5>
            <a href="https://www.facebook.com" target="__blank">
              Message me on Facebook
            </a>
          </article>

          
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject" required />

          <textarea
            name="message"
            id=""
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button className="btn" type="submit">
            <h3>Send Message</h3>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
