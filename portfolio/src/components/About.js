import React from "react";
import theme from "../assets/theme_pattern.svg";
import profile from "../assets/bubba.jpg";

export default function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a frontend developer with a passion for creating clean,
              engaging, and responsive web applications. My focus is on crafting
              seamless user experiences that not only look great but also
              function smoothly across devices.
            </p>
            <p>
              Driven by a love for problem-solving and continuous learning, I’m
              always exploring new technologies and design trends to bring fresh
              perspectives to my work.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>PHP </p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>3+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>20+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>6+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
}
