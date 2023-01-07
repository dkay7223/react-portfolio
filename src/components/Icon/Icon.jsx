import React, { useEffect } from 'react'

const Icon = (props) => {
  let link = props.link || "#";
  let target = props.target || "__blank";
  let a_className = props.a_className || "an";
  let i_className = props.i_className || "socials";
  let altText = props.alt || "";

  return (
        <a
        href={link}
        target= {target}
        className={()=>"an " + a_className}
        onClick={props.onClick}
      >
        <img src={props.src} alt={altText} className={()=>"socials " + i_className} />
      </a>
  )
}

export default Icon