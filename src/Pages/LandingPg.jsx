import React from "react";
import Spline_home from "../components/Spline_home";

export const LandingPg = () => {
  return (
    <section className="flexCenter flex-wrap h-screen relative">
      <div className=" absolute top-10 left-10 w-auto sm:w-[40%] pr-5 sm:px-10 flex flex-col gap-6 text-white z-0">
        {/* <h3></h3> */}
        <h2 className="txtOutlineCSS1 gradient-text2 text-5xl">Anurag Here!</h2>
        <p className=" gradient-text ">
          My first 3D website, where 3D models, effects, and animations come
          together in a seamless blend. I hope you enjoy the immersive
          experience as much as I enjoyed creating it.
          {/* Welcome to a world where 3D comes alive! Immerse yourself in
          interactive models and unleash your creativity. Explore the future of
          web development with dynamic 3D experiences. Dive in and discover a
          new dimension of digital innovation." */}
        </p>
      </div>
      <div className="z-10 flexCenter h-full">
        <Spline_home />
      </div>

      
    </section>
  );
};
