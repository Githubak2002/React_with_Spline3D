import React from "react";
import Spline_tshirt from "./Spline_tshirt";
import Spline_bike from "./Spline_Bike";
import Spline_3dtxt from "./Spline_3dtxt";

import { social_links } from "../constant";
import Spline_iphone from "./Spline_iPhone";
import Spline from "@splinetool/react-spline";
import { experience_section } from "../constant";
import { Link } from "react-router-dom";

export const Experience3D = () => {
  return (
    <section className="px-3 sm:px-10">
      {/* ============== 3D thirt ============== */}
      <main className="flexCenter flex-wrap w-full">
        <h2 className="max-w-[580px] px-3 txtOutlineCSS gradient-text_tshirt text-xl sm:text-4xl pb-4 w-auto sm:w-[30%] text-center">
          Adding 3D components to Website
        </h2>
        <div className="flexCenter w-full sm:w-[60%] h-full sm:h-[500px] hover:cursor-grab">
          <Spline_tshirt />
        </div>
      </main>

      {/* ============== 3D Bike with animation ============== */}
      {/* <main className="flexCenter flex-wrap-reverse w-full">
        <div className="flexCenter w-full sm:w-[60%] h-full sm:h-[500px] hover:cursor-grab">
          <Spline_bike />
        </div>
        <h2 className="max-w-[580px] px-3 txtOutlineCSS gradient-text_tshirt text-xl sm:text-4xl pb-4 w-auto sm:w-[30%]">
          3D Animations
        </h2>
      </main> */}

      {/* ============== Social Links ============== */}

      {/* <main className="flexCenter flex-col">
        <div className="flexCenter hover:cursor-grab sm:h-[20%] sm:w-[50%]">
          <Spline_3dtxt />
        </div>
        <div className="gradient-text2 flexCenter flex-wrap gap-10 text-2xl font-sans font-bold ">
          {social_links.map((ele, i) => {
            return (
              <Link to={ele.link} target="blank">
                {ele.label}{" "}
              </Link>
            );
          })}
        </div>
      </main> */}

      {/* <main className="flexCenter flex-wrap gap-6">
        {experience_section.map((ele, i) => {
          return (
            <div
              key={i}
              className="border-2 rounded-xl w-[350px] h-[350px] flexCenter"
            >
              <Spline scene={ele.scene_link} />
            </div>
          );
        })}
        
      </main> */}
      {/* <Spline_iphone /> */}
    </section>
  );
};
