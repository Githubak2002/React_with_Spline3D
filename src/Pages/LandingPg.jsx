import React from "react";
import Spline_home from "../components/Spline_home";

export const LandingPg = () => {
  return (
    <section className="flexCenter flex-wrap h-screen relative">
      <div className=" absolute top-10 left-10 w-auto sm:w-[40%] px-2 sm:px-10 flex flex-col gap-6 text-white z-0">
        <h2 className="txtOutlineCSS1 gradient-text2 text-5xl">Anurag Lohar</h2>
        <p className="">
          Lorem ipsum dctetur, adipisicing elit. Doloribus ad vitae inventore
          maxime incidunt quia maiores debitis, odit tenetur dolores.
        </p>
      </div>
      <div className="z-10 flexCenter h-full">
        <Spline_home />
      </div>
    </section>
  );
};
