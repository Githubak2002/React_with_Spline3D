import React from "react";
import Spline_tshirt from "./Spline_tshirt";
import Spline_iphone from "./Spline_iPhone";

export const Experience3D = () => {
  return (
    <section className="relative mt-10">
      <h2 className=" absolute max-w-[580px] px-3 top-10 left-5 txtOutlineCSS1 gradient-text_tshirt text-5xl z-[-10]">
        Adding 3D components to Website
      </h2>
      <Spline_tshirt />
      <Spline_iphone />
    </section>
  );
};
