import React, { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import Particles from "react-particles-js";

import quant from "../../assets/quanta.png";
import "./Landing.css";
import Wave from "react-wavify";

const Landing = () => {
  useEffect(() => {
    if (window.innerWidth > 700) {
      const landImg = document.querySelector(".landing__logo");
      VanillaTilt.init(landImg, {
        glare: true,
        scale: 1.03,
      });
    }
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="landing" className="landing">
      <Particles
        id="particles"
        params={{
          particles: {
            number: {
              value: 110,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#6e6e6e",
            },
            shape: {
              type: "square",
              stroke: {
                width: 1,
                color: "#000",
              },
              polygon: {
                nb_sides: 10,
              },
              image: {
                src: "",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.10258919341219544,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 0.1,
              random: false,
              anim: {
                enable: true,
                speed: 8,
                size_min: 8,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 200,
              color: "#ffffff",
              opacity: 1,
              width: 2,
            },
            move: {
              enable: true,
              speed: 6.313181133058181,
              direction: "top-right",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: false,
                mode: "grab",
              },
              onclick: {
                enable: false,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <article className="landing__container">
        <div className="landing__sub-1">
          {/*
          <h1 className="landing__heading">QUANT-A-MAZE</h1>
      */}
          <h2 className="landing__sub-heading">
            {" "}
            <strong>
              Q-BITS <span className="green">NMIT's</span>
            </strong>{" "}
            Hackathon
          </h2>
          <h2 className="landing__sub-heading green">5th September 2022</h2>

          <h4 className="landing__sub-heading-2">
            Register using the below link!
          </h4>
          <a
            href="https://bit.ly/3en2uIH"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="landing__btn">Register</button>
          </a>
          <div className="applydiv" style={{ position: "absolute" }}>
            <div
              class="apply-button"
              data-hackathon-slug="hackbout-3"
              data-button-theme="light"
              style={{ width: "312px", height: "44px", position: "relative" }}
            ></div>
          </div>

          <a
            href="https://discord.com/invite/G6r9vnYxqd"
            target="_blank"
            rel="noreferrer noopener "
          >
            <button className="btn_telegram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-discord"
                style={{
                  width: "30px",
                  height: "20px",
                  verticalAlign: "middle",
                  horizontalAlign: "middle",
                  margin: "0px 5px",
                }}
                viewBox="0 0 21 18"
              >
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path>
              </svg>
              {/*
              <svg
                style={{
                  width: "30px",
                  height: "20px",
                  verticalAlign: "middle",
                  margin: "0px 5px",
                }}
                viewBox="0 0 21 18"
              >
                <g fill="none">
                  <path
                    fill="#ffffff"
                    d="M0.554,7.092 L19.117,0.078 C19.737,-0.156 20.429,0.156 20.663,0.776 C20.745,0.994 20.763,1.23 20.713,1.457 L17.513,16.059 C17.351,16.799 16.62,17.268 15.88,17.105 C15.696,17.065 15.523,16.987 15.37,16.877 L8.997,12.271 C8.614,11.994 8.527,11.458 8.805,11.074 C8.835,11.033 8.869,10.994 8.905,10.958 L15.458,4.661 C15.594,4.53 15.598,4.313 15.467,4.176 C15.354,4.059 15.174,4.037 15.036,4.125 L6.104,9.795 C5.575,10.131 4.922,10.207 4.329,10.002 L0.577,8.704 C0.13,8.55 -0.107,8.061 0.047,7.614 C0.131,7.374 0.316,7.182 0.554,7.092 Z"
                  ></path>
                </g>
              </svg> */}
              {/* Add SVG Logo for Discord */}
              <div>Join Our Discord</div>
            </button>
          </a>
        </div>

        <div className="landing__sub-2">
          {/*
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="hex__back-1"
            width={347}
            height={400}
            filter="drop-shadow(rgba(255,255,255,.5) 0 0 10px)"
          >
            <path
              fill="#7da4bcde"
              d="M158.483 8.5q14.722-8.5 29.445 0l143.76 83Q346.41 100 346.41 117v166q0 17-14.722 25.5l-143.76 83q-14.723 8.5-29.445 0l-143.76-83Q0 300 0 283V117q0-17 14.722-25.5z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={373}
            height={430}
            filter="drop-shadow(rgba(255,255,255,.5) 0 0 10px)"
            className="hex__back-2"
          >
            <path
              fill=" #7da4bc9c"
              d="M171.473 8.5q14.722-8.5 29.445 0L357.668 99q14.723 8.5 14.723 25.5v181q0 17-14.723 25.5l-156.75 90.5q-14.723 8.5-29.445 0L14.723 331Q0 322.5 0 305.5v-181q0-17 14.722-25.5z"
            />
            </svg> */}
          <div className="landing__sub-2">
            <img src={quant} alt="hackbout-logo" className="landing__logo" />
          </div>
        </div>
      </article>

      <div className="custom-shape-divider-bottom-1618824420">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      {/* <div className="custom-shape-divider-bottom-1618824420">
        <Wave
          fill="rgb(29,34,38)"
          style={{ zIndex: -1 }}
          paused={false}
          options={{
            height: 20,
            amplitude: 20,
            speed: 0.25,
            points: 4,
          }}
        >
         
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
          <svg width="100hw" height="110" className="shape-fill">
            <rect width="10000" height="100" />
          </svg>
        </Wave>
      </div> */}
    </section>
  );
};

export default Landing;
