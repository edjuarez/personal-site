import "./About.css";

import {
  FiMapPin,
  FiMail,
  FiCode,
  FiLayers,
  FiZap
} from "react-icons/fi";

import {
  FaReact,
  FaAngular,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaJsSquare
} from "react-icons/fa";

import {
  SiTypescript
} from "react-icons/si";

export const About = () => {

  return (

    <section
      id="about"
      className="about"
    >

      <div className="about-container">

        {/* LEFT SIDE */}

        <div className="about-left">

          {/* <span className="about-label general-label">
            ABOUT ME
          </span> */}

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
          {/* STATS */}

          {/* <div className="about-stats">

            <div className="about-stat-card">

              <FiCode />

              <h3>10+</h3>

              <p>Projects</p>

            </div>

            <div className="about-stat-card">

              <FiLayers />

              <h3>5+</h3>

              <p>Years Experience</p>

            </div>

            <div className="about-stat-card">

              <FiZap />

              <h3>Always</h3>

              <p>Learning</p>

            </div>

          </div> */}

        </div>

        {/* RIGHT SIDE */}

        <div className="about-right">

          <div className="about-image-card">

            <img
              src="/profile.png"
              alt="Eduardo"
            />

            <div className="about-glow" />

          </div>
         <div className="about-skills">

            <p className="about-skills-title">
              PROFICIENT IN
            </p>

            <div className="about-skills-grid">

              <span>
                <FaJsSquare />
                JavaScript
              </span>

              <span>
                <SiTypescript />
                TypeScript
              </span>

              <span>
                <FaReact />
                React
              </span>

              <span>
                <FaAngular />
                Angular
              </span>

              <span>
                <FaHtml5 />
                HTML
              </span>

              <span>
                <FaCss3Alt />
                CSS
              </span>

              <span>
                <FaGitAlt />
                Git
              </span>

            </div>

          </div>
        </div>

      </div>

    </section>
  );
};