import React from "react";
import { words } from "../constants";
import Button from "../components/button";
import HeroExperience from "../components/HeroModels/HeroExperience";
import AnimatedCounter from "../components/AnimatedCounter";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />

                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Delivers Result</h1>
            </div>
            <p>
              Hi, I’m Chirag Kathoye — a passionate software developer eager to
              build and maintain{" "}
            </p>
            <p>
              {" "}
              robust, scalable applications while continuously staying updated{" "}
            </p>
            <p> with the latest in technologies !</p>
            <a
              href="/public/images/abc.pdf"
              className="md:w-80 md:h-16 w-60 h-12"
              download
            >
              <Button
                className="md:w-80 md:h-16 w-60 h-12"
                id="button"
                text="Download Resume"
              />
            </a>
          </div>
        </header>

        {/* RIGHT: 3D Model */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
