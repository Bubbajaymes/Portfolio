import React from "react";
import profile from "../assets/bubba.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Hero() {
  return (
    <div id="home" className="hero">
      <img src={profile} alt="" />
      <h1>
        <span>I'am Bubba,</span> a frontend dev based in Nairobi,Kenya.
      </h1>
      <p>
        I am a frontend developer from Kenya with 3 years of experience in
        multiple companies like REDUZER, Serene and MyTECH.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect with me!
        </AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}
