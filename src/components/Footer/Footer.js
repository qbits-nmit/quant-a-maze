import React from "react";
import { IconContext } from "react-icons";
import { TiSocialInstagram } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiHeart2Fill } from "react-icons/ri";
import Wave from "react-wavify";
import sangharsh from "../../assets/sangharsh.png";
import iris from "../../assets/iris.png";
import quant2 from "../../assets/quant-logo.png";

import hackBout from "../../assets/HackBout.svg";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      {/*
      <div className="custom-shape-divider-top-1619379941">
        {/* <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className='shg'
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg> */}
      {/* </Wave> 
      </div>
 
      <Wave
        style={{
          zIndex: 10,
          overflow: 'hidden',
          position: 'absolute',
          marginBottom: '45vh',
          marginLeft: 0,
        }}
        fill="#1d2228"
        paused={false}
        options={{
          height: 35,
          amplitude: 25,
          speed: 0.25,
          points: 4,
        }}
      /> */}

      <div className="footer__image">&nbsp;</div>
      <div className="footer">
        <div className="footer__logo" style={{ zIndex: "15" }}>
          <img src={quant2} className="footer_logo_img" alt="QuantAMaze-Logo" />
          <h1>QUANT-A-MAZE</h1>
        </div>
        <div className="footer__sections">
          <div className="footer__sec-1">
            <h3>Sections</h3>
            <a
              href="#tracks"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(".tracks").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Tracks
            </a>
            {/* <a href="#">Schedule</a> */}
            {/* <a href="#mentors">Mentors</a> */}
            <a
              href="#sponsors"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(".sponsors").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Sponsors
            </a>
            {/* 
            <Link
              to="/mlhform"
              rel="noreferrer noopener "
            >
              MLH Form
            </Link> */}
          </div>
          <div className="footer__sec-2">
            <h3>Resources</h3>
            <a
              // href="https://drive.google.com/file/d/1P1LMcvudLiWL0nBSIvKOLU7i3EKAcKA4/view?usp=sharing"
              href="https://drive.google.com/file/d/1qz1BnGPdxw6Dh9B1n6y3QLqIZ-cSM6yW/view?usp=sharing"
              target="_blank"
              rel="noreferrer noopener "
            >
              Sponsorship Brochure
            </a>

            <a
              href="https://drive.google.com/file/d/1FfgQxKHOD-IRRvxgTAAnar9fdPfWp2iQ/view?usp=sharing"
              target="_blank"
              rel="noreferrer noopener "
            >
              Rules & Regulations
            </a>
            {/*
            <a
              href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
              target="_blank"
              rel="noreferrer noopener "
            >
              MLH Code of Conduct
            </a>
            */}
          </div>
          <div className="footer__sec-3">
            <h3>Contact Us</h3>
            <div className="social__links">
              <a
                href="https://www.instagram.com/qtechclub_nmit"
                target="_blank"
                rel="noreferrer noopener "
                style={{ fontSize: "27px" }}
              >
                <IconContext.Provider value={{ title: "Instagram-Link" }}>
                  <TiSocialInstagram />
                </IconContext.Provider>
              </a>
              <a
                href="https://www.linkedin.com/company/qbitsnmit/"
                target="_blank"
                rel="noreferrer noopener "
              >
                <IconContext.Provider value={{ title: "LinkedIn-Link" }}>
                  <FaLinkedin />
                </IconContext.Provider>
              </a>
              {/*
              <a
                href="https://www.facebook.com/pg/hackclubnmit/posts/"
                target="_blank"
                rel="noreferrer noopener "
              >
                <IconContext.Provider value={{ title: 'Facebook-Link' }}>
                  <FaFacebookF />
                </IconContext.Provider>
              </a>
              */}
              <a
                href="https://github.com/Q-Bits-NMIT"
                target="_blank"
                rel="noreferrer noopener "
              >
                <IconContext.Provider value={{ title: "Github-Link" }}>
                  <FaGithub />
                </IconContext.Provider>
              </a>
              {/*}  
            </div>
            <div className="social__links-2"> */}
              <a
                href="mailto:quantumtechclub.nmit@gmail.com"
                target="_blank"
                rel="noreferrer noopener "
              >
                <IconContext.Provider value={{ title: "Email-Link" }}>
                  <MdEmail />
                </IconContext.Provider>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*       
      <div className="footer__end">
        In collaboration with
        <div className="social_links">
            <img
              src={iris}
              className="footer_logo_club"
              alt="Iris-Logo"
            />
            <img
              src={sangharsh}
              className="footer_logo_club"
              alt="Iris-Logo"
            />
            <img
              src={iris}
              className="footer_logo_club"
              alt="Iris-Logo"
            />
        </div>
      </div>
          */}
    </footer>
  );
};

export default Footer;
