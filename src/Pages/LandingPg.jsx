import React from "react";
import Spline_home from "../components/Spline_home";

import Spline from "@splinetool/react-spline";

export const LandingPg = () => {
  return (
    <section className="flexCenter flex-wrap h-screen relative">
      <Spline
        scene="https://prod.spline.design/Gw3Dkr4tz22PNYGh/scene.splinecode"
        className="absolute right-0 top-0 z-[-100] lg:flex hidden opacity-100"
      />
      <div className=" absolute top-10 left-10 w-auto sm:w-[40%] pr-5 sm:px-10 flex flex-col gap-6 text-white z-0">
        <h2 className="txtOutlineCSS1 gradient-text2 text-5xl">Anurag Here!</h2>
        <h2 className="txtOutlineCSS1 gradient-text3 text-3xl">WebD || 3D </h2>
        <p className=" gradient-text3 ">
          My first 3D website, where 3D models, effects, and animations come
          together in a seamless blend. I hope you enjoy the immersive
          experience as much as I enjoyed creating it.
          {/* Welcome to a world where 3D comes alive! Immerse yourself in
          interactive models and unleash your creativity. Explore the future of
          web development with dynamic 3D experiences. Dive in and discover a
          new dimension of digital innovation." */}
        </p>
      </div>
      <div className="z-10 flexCenter h-full sm:mt-0 mt-10">
        <Spline_home />
      </div>
    </section>
  );
};
