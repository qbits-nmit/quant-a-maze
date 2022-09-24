import React from "react";

import first from "../../assets/prizes/first.png";
import second from "../../assets/prizes/second.png";
import third from "../../assets/prizes/third.png";
import "./Prizes.css";

const Prizes = () => {
  return (
    <section id="prizes" className="prizes">
      <h1
        className="prizes__title green"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease"
      >
        Prizes
      </h1>
      <div className="prizes__main">
        <div
          className="prizes__card second"
          // data-aos="fade-up-right"
          data-aos="zoom-in"
          data-aos-offset="100"
          data-aos-delay="150"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          <img src={second} className="prizes__img" alt="second prize" />
          <p>INR 40,000</p>
        </div>
        <div
          className="prizes__card first"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          <img src={first} className="prizes__img" alt="first prize" />
          <p>INR 80,000</p>
        </div>
        <div
          className="prizes__card third"
          // data-aos="fade-up-left"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="150"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          <img src={third} className="prizes__img" alt="third prize" />
          <p>INR 20,000</p>
        </div>
      </div>
      <div className="prizes__sub">
        <h3
          className="prizes__title--sub green"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          Sponsored Prizes
        </h3>

        <div className="prizes__grid">
          <div
            className="bounty__card b_bindia"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease"
          >
            <div>
              <span> to be Announced....</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
