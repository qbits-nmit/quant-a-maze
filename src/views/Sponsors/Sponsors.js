import React from "react";
// import { motion } from 'framer-motion';

import "./Sponsors.css";
import bqp from "../../assets/sponsors/qbits/bqp.png";
import alvolved from "../../assets/sponsors/qbits/alvolved.png";
import myn from "../../assets/sponsors/qbits/myn.png";
import qnu from "../../assets/sponsors/qbits/qnu-logo.svg";
import w3q from "../../assets/sponsors/qbits/w3q.svg";
import wolfram from "../../assets/sponsors/qbits/wolfram.png";
import taskade from "../../assets/sponsors/qbits/taskade.svg";
import interviewb from "../../assets/sponsors/qbits/interviewbuddy.png";
import interviewca from "../../assets/sponsors/qbits/interviewcake.svg";
import balsamiq from "../../assets/sponsors/qbits/balsamiq.svg";
import aops from "../../assets/sponsors/qbits/aops.png";
import axure from "../../assets/sponsors/qbits/axure.svg";
import venjay from "../../assets/sponsors/qbits/venjay-removebg-preview.png";
import rosenfeld from "../../assets/sponsors/qbits/Rosenfeld_logohackbout3.png"

const Sponsors = () => {
  return (
    <section id="sponsors" className="sponsors">
      <h1
        className="sponsors-heading"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease"
      >
        Our <span className="green">Sponsors</span>
      </h1>

      {
        <div className="new__sponsors">
          <div className="sponsors__main">
            <h3
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos-easing="ease"
            >
              <span className="green">Platinum</span> Sponsor
            </h3>
            <div className="sponsors-grid">
              <a
                // href="https://twitter.com/devfolio/"
                href="https://www.bosonqpsi.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="a_devfolio"
              >
                <img
                  src={bqp}
                  className="sponsors__img bqp"
                  alt="sponsor devfolio"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                />
              </a>
              <p className="text-hover">BosonQ Psi</p>
              <a
                // href="https://twitter.com/devfolio/"
                href="https://wolfram.com"
                target="_blank"
                rel="noopener noreferrer"
                // className="a_devfolio devfolio"
              >
                <img
                  src={wolfram}
                  className="sponsors__img wolfram"
                  alt="sponsor devfolio"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                />
              </a>
            </div>

            {/*}
            <div className="sponsors-grid polygonclass">
            </div>
            <a
                href="https://polygon.technology/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={polygon}
                  className="sponsors__img polygon"
                  alt="sponsor polygon"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                />
              </a>
      */}
          </div>

          <div className="sponsors__sub">
            <h4
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos-easing="ease"
            >
              <span className="green">Gold</span> Sponsors
            </h4>
            <div className="associate-sponsor">
              <div className="article">
                <a
                  href="https://taskade.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={taskade}
                    className="sponsors__img tezos"
                    alt="sponsor tezos"
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                  />
                </a>
              </div>

              <div className="article">
                <a
                  href="https://interviewbuddy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={interviewb}
                    className="sponsors__img filecoin"
                    alt="sponsor tezos"
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                  />
                </a>
              </div>
            </div>
            {/* 
            <div className="article">
              <a
                href="https://celo.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={celo}
                  className="sponsors__img celo"
                  alt="sponsor celo"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                />
              </a>
            </div>
    */}

            <div className="sponsors__sub">
              <h4
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease"
              >
                <span className="green">Silver</span> Sponsors
              </h4>
              <div className="associate-sponsor">
                <div className="article">
                  <a
                    href="https://myn.global/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={myn}
                      className="sponsors__img myn"
                      alt="sponsor tezos"
                      data-aos="zoom-in"
                      data-aos-offset="200"
                      data-aos-delay="0"
                      data-aos-duration="1000"
                      data-aos-easing="ease"
                    />
                  </a>
                </div>

                <div className="article">
                  <a
                    href="https://w3q.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={w3q}
                      className="sponsors__img w3q"
                      alt="sponsor tezos"
                      data-aos="zoom-in"
                      data-aos-offset="200"
                      data-aos-delay="0"
                      data-aos-duration="1000"
                      data-aos-easing="ease"
                    />
                  </a>
                </div>
                <div className="article">
                  <a
                    href="https://interviewcake.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={interviewca}
                      className="sponsors__img interviewcake"
                      alt="sponsor tezos"
                      data-aos="zoom-in"
                      data-aos-offset="200"
                      data-aos-delay="0"
                      data-aos-duration="1000"
                      data-aos-easing="ease"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="sponsors__sub">
              <h4
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease"
              >
                <span className="green">Bronze</span> Sponsors
              </h4>
            </div>
            <div className="article">
              <a
                href="https://www.qnulabs.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={qnu}
                  className="sponsors__img bqp"
                  alt="sponsor tezos"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                />
              </a>
            </div>
          </div>
          <div className="sponsors__sub">
            <h4
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos-easing="ease"
            >
              <span className="green">Other Valued</span> Sponsors
            </h4>
          </div>

          <div className="associate-sponsor">
            <div className="article">
              <a
                href="https://www.aivolved.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={alvolved}
                  className="sponsors__img alvolved"
                  alt="sponsor Shashido"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                />
              </a>
            </div>
            <div className="article">
              <a
                href="https://www.balsamiq.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={balsamiq}
                  className="sponsors__img balsamiq"
                  alt="sponsor Shashido"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                />
              </a>
            </div>
            <div className="article">
              <a
                href="https://artofproblemsolving.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={aops}
                  className="sponsors__img balsamiq"
                  alt="sponsor Shashido"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                />
              </a>
            </div>
            </div>
            <div className="associate-sponsor">
              <div className="article">
                <a
                  href="https://www.axure.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={axure}
                    className="sponsors__img balsamiq"
                    alt="sponsor Shashido"
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                  />
                </a>
              </div>
              <div className="article">
                <a
                  href="https://venjayautomation.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={venjay}
                    className="sponsors__img educationtree"
                    alt="sponsor Shashido"
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                  />
                </a>
              </div>
              <div className="article">
                <a
                  href="https://rosenfeldmedia.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={rosenfeld}
                    className="sponsors__img balsamiq"
                    alt="sponsor Shashido"
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                  />
                </a>
              </div>
            </div>
          </div>
      }
    </section>
  );
};

export default Sponsors;
