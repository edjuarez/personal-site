import "./About.css";

import {
  FaReact,
  FaAngular,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaJsSquare,
  FaRobot,
  FaNodeJs
} from "react-icons/fa";

import {
  SiTypescript
} from "react-icons/si";

export const About = () => {

  return (

    <section id="about" className="about">
      <div className="about-container">

        {/* LEFT SIDE */}
        <div className="about-left">

          <h2 className="about-title general-title">
            About Myself
          </h2>

          <div className="about-divider" />

          <p className="about-description">
          Hi, I’m Eduardo — a Web, Roku and Game Developer from Argentina currently living in Spain. I studied video game development and interactive media, which gave me experience in programming, design, and creative problem-solving.
          <br />
          <br />
          After graduating, I joined Globant, where I worked for more than 10 years as both a Web Developer and Roku Developer, contributing to large-scale streaming and web applications for international clients.
          <br />
          <br />
          I work with modern frameworks such as React and Angular, and I actively use AI-powered tools like OpenAI ChatGPT and Anthropic Claude to improve development speed, software quality, and overall project efficiency.
          </p>
        </div>

        {/* RIGHT SIDE */}

        <div className="about-right">
          <div className="about-image-card">

            <img
              src="./profile.png"
              alt="Eduardo"
            />

            <div className="about-glow" />

          </div>
          <div className="about-skills">
            <p className="about-skills-title">
              PROFICIENT IN
            </p>
            <div className="about-skills-grid">
              <span><FaJsSquare />JavaScript</span>
              <span><SiTypescript />TypeScript</span>
              <span><FaReact />React</span>
              <span><FaAngular />Angular</span>
              <span><FaHtml5 />HTML5</span>
              <span><FaCss3Alt />CSS3</span>
              <span><FaGitAlt />Git</span>
              <span><FaRobot />AI</span>
              <span><FaNodeJs />Node.js</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};