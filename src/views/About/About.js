import React, { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

import './About.css';

const About = () => {
  useEffect(() => {
    if (window.innerWidth > 700) {
      const landImg = document.querySelectorAll('.hex');
      VanillaTilt.init(landImg, {
        glare: true,
        scale: 1.1,
      });
    }
  }, []);

  return (
    <section id="about" className="about">
      <h1
        className="about-heading"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="1000"
        data-aos-easing="ease"
      >
        <span className="green">About</span> Quant-A-Maze
      </h1>
      <div className="archive about-main">
        <div className="about__main">
          <p
            className="about_des des_main"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            Q-BITS NMIT presents Quant-A-Maze, student organized hackathon in Bangalore. Quant-A-Maze aims to bring talented
            individuals be it student or professional, to compete over 24 hours
            and develop innovative solutions to real world problems and provide
            a friendly yet competitive environment where teams can bring out the
            best in themselves. We want you to meet more like minded people and
            introduce you to industry experts who can help and guide you along
            the way.
          </p>
        </div>
        <div className="about_hex">
          <div
            className="hex img-4"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease"
          ></div>
          <div
            className="hex img-2"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="150"
            data-aos-duration="1000"
            data-aos-easing="ease"
          ></div>
          <div
            className="hex img-3"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default About;
