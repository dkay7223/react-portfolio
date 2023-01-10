import React from "react";
import IN from "../../Assets/in.png";
import GH from "../../Assets/gh.png";
import Docker from "../../Assets/docker.png";
import "./header.css";
import Icon from "../Icon/Icon";
const headerSocials = () => {

  return (
    <div className="header__socials">
     
      <Icon href={"https://www.linkedin.com/in/daniyal-khan-6261b0254/" } target="__blank"
       src={IN}/>
      <Icon href="https://github.com/dkay7223" src={GH} target="__blank"/>
      <Icon href="https://hub.docker.com/u/dkay7223" src={Docker} target="__blank"/>
    </div>
  );
};

export default headerSocials;